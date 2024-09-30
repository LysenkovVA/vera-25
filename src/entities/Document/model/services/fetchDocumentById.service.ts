import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Document } from "../types/document";
import { fetchDocumentById } from "@/shared/actions/documents/fetchDocumentById";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";

export interface FetchDocumentByIdProps {
  id: string;
}

export const fetchDocumentByIdService = createAsyncThunk<
  ServerResponse<Document>,
  FetchDocumentByIdProps,
  ThunkConfig<string>
>("fetchDocumentByIdService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await fetchDocumentById(props.id);

    if (!response.isOk) {
      return rejectWithValue(
        response.errorMessages
          ? response.errorMessages.join(", ")
          : "Ошибка не содержит описания",
      );
    }

    return response;
  } catch (e) {
    return rejectWithValue(`Ошибка при получении документа с id=${props.id}`);
  }
});
