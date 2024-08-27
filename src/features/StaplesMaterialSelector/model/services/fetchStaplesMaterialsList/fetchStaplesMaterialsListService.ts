import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { StaplesMaterial } from "@/entities/StaplesMaterial";

export interface FetchStaplesMaterialsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchStaplesMaterialsListService = createAsyncThunk<
  StaplesMaterial[],
  FetchStaplesMaterialsListServiceServiceProps,
  ThunkConfig<string>
>("fetchStaplesMaterialsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/staples-materials`,
    );

    return (await response.json()) as StaplesMaterial[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка материалов скрепок");
  }
});
