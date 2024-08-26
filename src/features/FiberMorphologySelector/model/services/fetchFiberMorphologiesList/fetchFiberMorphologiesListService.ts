import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { FiberColor } from "@/entities/FiberColor";

export interface FetchFiberMorphologiesListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchFiberMorphologiesListService = createAsyncThunk<
  FiberColor[],
  FetchFiberMorphologiesListServiceServiceProps,
  ThunkConfig<string>
>("fetchFiberMorphologiesListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/fiber-morphologies`,
    );

    return (await response.json()) as FiberColor[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка морфологий нитей");
  }
});
