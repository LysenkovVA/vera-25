import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { LaminateMethod } from "@/entities/LaminateMethod";

export interface FetchLaminateMethodsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchLaminateMethodsListService = createAsyncThunk<
  LaminateMethod[],
  FetchLaminateMethodsListServiceServiceProps,
  ThunkConfig<string>
>("fetchLaminateMethodsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/laminate-methods`,
    );

    return (await response.json()) as LaminateMethod[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка способов ламинирования",
    );
  }
});
