import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { BlockCornersDesign } from "@/entities/BlockCornersDesign";

export interface FetchBlockCornersDesignsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchBlockCornersDesignsListService = createAsyncThunk<
  BlockCornersDesign[],
  FetchBlockCornersDesignsListServiceServiceProps,
  ThunkConfig<string>
>("fetchBlockCornersDesignsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/block-corner-designs`,
    );

    return (await response.json()) as BlockCornersDesign[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка конструкций углов блоков",
    );
  }
});
