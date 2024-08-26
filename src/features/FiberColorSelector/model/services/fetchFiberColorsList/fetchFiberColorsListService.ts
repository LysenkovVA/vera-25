import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { FiberColor } from "@/entities/FiberColor";

export interface FetchFiberColorsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchFiberColorsListService = createAsyncThunk<
  FiberColor[],
  FetchFiberColorsListServiceServiceProps,
  ThunkConfig<string>
>("fetchFiberColorsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/fiber-colors`,
    );

    return (await response.json()) as FiberColor[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка цветов нитей");
  }
});
