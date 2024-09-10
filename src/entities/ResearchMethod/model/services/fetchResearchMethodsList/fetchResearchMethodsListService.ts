import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { ResearchMethod } from "@/entities/ResearchMethod";

export interface FetchResearchMethodsListServiceProps {
  replaceData?: boolean;
}

export const fetchResearchMethodsListService = createAsyncThunk<
  ResearchMethod[],
  FetchResearchMethodsListServiceProps,
  ThunkConfig<string>
>("fetchResearchMethodsListService", async (props, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/research-methods`,
    );

    return (await response.json()) as ResearchMethod[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка типов исследований");
  }
});
