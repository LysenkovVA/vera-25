import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { BlankType } from "@/entities/BlankType";

export interface FetchBlankTypesListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchBlankTypesListService = createAsyncThunk<
  BlankType[],
  FetchBlankTypesListServiceServiceProps,
  ThunkConfig<string>
>("fetchBlankTypesListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/blank-types`,
    );

    return (await response.json()) as BlankType[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка типов бланков");
  }
});
