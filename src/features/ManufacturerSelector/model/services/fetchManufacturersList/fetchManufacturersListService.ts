import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Manufacturer } from "@/entities/Manufacturer";

export interface FetchManufacturersListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchManufacturersListService = createAsyncThunk<
  Manufacturer[],
  FetchManufacturersListServiceServiceProps,
  ThunkConfig<string>
>("fetchManufacturersListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/manufacturers`,
    );

    return (await response.json()) as Manufacturer[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка производителей");
  }
});
