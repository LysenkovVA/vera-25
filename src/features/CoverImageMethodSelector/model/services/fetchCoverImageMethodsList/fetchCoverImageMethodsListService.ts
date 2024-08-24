import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { CoverImageMethod } from "@/entities/CoverImageMethod";

export interface FetchCoverImageMethodsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchCoverImageMethodsListService = createAsyncThunk<
  CoverImageMethod[],
  FetchCoverImageMethodsListServiceServiceProps,
  ThunkConfig<string>
>("fetchCoverImageMethodsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/cover-image-methods`,
    );

    return (await response.json()) as CoverImageMethod[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка способов нанесения изображений",
    );
  }
});
