import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { ApplyingDataMethod } from "@/entities/ApplyingDataMethod";

export interface FetchApplyingDataMethodsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchApplyingDataMethodsListService = createAsyncThunk<
  ApplyingDataMethod[],
  FetchApplyingDataMethodsListServiceServiceProps,
  ThunkConfig<string>
>("fetchApplyingDataMethodsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/applying-data-methods`,
    );

    return (await response.json()) as ApplyingDataMethod[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка способов нанесения данных",
    );
  }
});
