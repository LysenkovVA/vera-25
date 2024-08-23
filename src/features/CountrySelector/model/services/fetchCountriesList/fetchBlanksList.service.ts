import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Country } from "@/entities/Country";

export interface FetchCountriesListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchCountriesListService = createAsyncThunk<
  Country[],
  FetchCountriesListServiceServiceProps,
  ThunkConfig<string>
>("fetchCountriesListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/countries`,
    );

    return (await response.json()) as Country[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка стран");
  }
});
