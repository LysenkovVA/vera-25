import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Document } from "../types/document";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";
import { deleteDocument } from "@/shared/actions/documents/deleteDocument";

export interface DeleteDocumentServiceProps {
  documentId: string;
}

export const deleteDocumentService = createAsyncThunk<
  ServerResponse<Document>,
  DeleteDocumentServiceProps,
  ThunkConfig<string>
>("deleteDocumentService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await deleteDocument(props.documentId);

    if (!response.isOk) {
      return rejectWithValue(
        response.errorMessages
          ? response.errorMessages.join(", ")
          : "Ошибка не содержит описания",
      );
    }

    return response;
  } catch (e) {
    return rejectWithValue(
      `Произошла неизвестная ошибка при создании документа c id=${props.documentId}: ${JSON.stringify(e)}`,
    );
  }
});
