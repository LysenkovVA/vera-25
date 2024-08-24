import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { BlockDesign } from "@/entities/BlockDesign";

export interface FetchBlockDesignsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchBlockDesignsListService = createAsyncThunk<
  BlockDesign[],
  FetchBlockDesignsListServiceServiceProps,
  ThunkConfig<string>
>("fetchBlockDesignsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/block-designs`,
    );

    return (await response.json()) as BlockDesign[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка конструкций блоков");
  }
});
