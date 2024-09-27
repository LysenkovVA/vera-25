import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { DocumentsResponse } from "@/app/api/documents/route";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

export interface FetchDocumentsListServiceProps {
  replaceData?: boolean;
}

export const fetchDocumentsListService = createAsyncThunk<
  DocumentsResponse,
  FetchDocumentsListServiceProps,
  ThunkConfig<string>
>("fetchDocumentsListService", async (props, thunkApi) => {
  const { rejectWithValue, getState } = thunkApi;

  const state = getState() as StateSchema;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/documents?skip=${state.documentsList?.skip}&take=${state.documentsList?.take}&search=${state.documentsList?.search}`,
    );

    return (await response.json()) as DocumentsResponse;
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка документов");
  }
});
