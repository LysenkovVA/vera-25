import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { StaplesBackSize } from "@/entities/StaplesBackSize";

export interface FetchStaplesBackSizesListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchStaplesBackSizesListService = createAsyncThunk<
  StaplesBackSize[],
  FetchStaplesBackSizesListServiceServiceProps,
  ThunkConfig<string>
>("fetchStaplesBackSizesListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/staples-back-sizes`,
    );

    return (await response.json()) as StaplesBackSize[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка размеров спинок скрепок",
    );
  }
});
