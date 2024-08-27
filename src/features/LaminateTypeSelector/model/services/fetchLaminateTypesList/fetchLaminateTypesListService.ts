import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { LaminateType } from "@/entities/LaminateType";

export interface FetchLaminateTypesListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchLaminateTypesListService = createAsyncThunk<
  LaminateType[],
  FetchLaminateTypesListServiceServiceProps,
  ThunkConfig<string>
>("fetchLaminateTypesListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/laminate-types`,
    );

    return (await response.json()) as LaminateType[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка типов ламината");
  }
});
