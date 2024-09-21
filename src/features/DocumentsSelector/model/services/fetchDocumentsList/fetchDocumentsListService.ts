import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Document } from "@/entities/Document";

export interface FetchDocumentsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchDocumentsListService = createAsyncThunk<
  Document[],
  FetchDocumentsListServiceServiceProps,
  ThunkConfig<string>
>("fetchDocumentsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/documents`,
    );

    return (await response.json()) as Document[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка документов");
  }
});
