import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Document } from "../types/document";
import { createDocument } from "@/shared/actions/documents/createDocument";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";

export interface CreateDocumentProps {
  document: Document;
}

export const createDocumentService = createAsyncThunk<
  ServerResponse<Document>,
  CreateDocumentProps,
  ThunkConfig<string>
>("createDocumentService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await createDocument(props.document);

    if (!response.isOk) {
      return rejectWithValue(
        response.errorMessages
          ? response.errorMessages.join("\n\n")
          : "Ошибка не содержит описания",
      );
    }

    return response;
  } catch (e) {
    return rejectWithValue(
      `Произошла неизвестная ошибка при создании документа: ${JSON.stringify(e)}`,
    );
  }
});
