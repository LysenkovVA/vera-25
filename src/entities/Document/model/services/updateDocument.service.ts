import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Document } from "../types/document";
import { updateDocument } from "@/shared/actions/documents/updateDocument";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";

export interface UpdateDocumentProps {
  document: Document;
}

export const updateDocumentService = createAsyncThunk<
  ServerResponse<Document>,
  UpdateDocumentProps,
  ThunkConfig<string>
>("updateDocumentService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await updateDocument(props.document);

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
      `Произошла неизвестная ошибка при обновлении документа с id=${props.document.id}: ${JSON.stringify(e)}`,
    );
  }
});
