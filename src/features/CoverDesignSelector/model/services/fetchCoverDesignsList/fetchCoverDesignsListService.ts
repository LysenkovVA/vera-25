import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { CoverDesign } from "@/entities/CoverDesign";

export interface FetchCoverDesignsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchCoverDesignsListService = createAsyncThunk<
  CoverDesign[],
  FetchCoverDesignsListServiceServiceProps,
  ThunkConfig<string>
>("fetchCoverDesignsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/cover-designs`,
    );

    return (await response.json()) as CoverDesign[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка конструкций обложек");
  }
});
