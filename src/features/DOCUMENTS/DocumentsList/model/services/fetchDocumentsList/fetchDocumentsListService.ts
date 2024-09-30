import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";
import { fetchDocuments } from "@/shared/actions/documents/fetchDocuments";
import { Document } from "@/entities/Document";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";

export interface FetchDocumentsListServiceProps {
  replaceData?: boolean;
}

export const fetchDocumentsListService = createAsyncThunk<
  ServerResponse<Document[]>,
  FetchDocumentsListServiceProps,
  ThunkConfig<string>
>("fetchDocumentsListService", async (props, thunkApi) => {
  const { rejectWithValue, getState } = thunkApi;

  const state = getState() as StateSchema;

  try {
    // Отправляем запрос
    const response = await fetchDocuments(
      state.documentsList?.skip,
      state.documentsList?.take,
      state.documentsList?.search,
    );

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
      "Произошла неизвестная ошибка при получении списка документов",
    );
  }
});
