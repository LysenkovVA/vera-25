import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { CoverColor } from "@/entities/CoverColor";

export interface FetchCoverColorsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchCoverColorsListService = createAsyncThunk<
  CoverColor[],
  FetchCoverColorsListServiceServiceProps,
  ThunkConfig<string>
>("fetchCoverColorsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/cover-colors`,
    );

    return (await response.json()) as CoverColor[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка цветов покровных материалов",
    );
  }
});
