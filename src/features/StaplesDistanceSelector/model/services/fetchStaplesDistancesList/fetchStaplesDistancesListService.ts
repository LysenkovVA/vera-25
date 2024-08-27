import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { StaplesDistance } from "@/entities/StaplesDistance";

export interface FetchStaplesDistancesListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchStaplesDistancesListService = createAsyncThunk<
  StaplesDistance[],
  FetchStaplesDistancesListServiceServiceProps,
  ThunkConfig<string>
>("fetchStaplesDistancesListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/staples-distances`,
    );

    return (await response.json()) as StaplesDistance[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка расстояний между скрепками",
    );
  }
});
