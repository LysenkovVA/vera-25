import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { DetailType } from "@/entities/DetailType";

export interface FetchDetailTypesListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchDetailTypesListService = createAsyncThunk<
  DetailType[],
  FetchDetailTypesListServiceServiceProps,
  ThunkConfig<string>
>("fetchDetailTypesListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/detail-types`,
    );

    return (await response.json()) as DetailType[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка типов реквизитов");
  }
});
