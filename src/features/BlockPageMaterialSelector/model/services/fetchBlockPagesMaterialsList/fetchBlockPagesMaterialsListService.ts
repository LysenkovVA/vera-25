import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { BlockPagesMaterial } from "@/entities/BlockPagesMaterial";

export interface FetchBlockPagesMaterialsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchBlockPagesMaterialsListService = createAsyncThunk<
  BlockPagesMaterial[],
  FetchBlockPagesMaterialsListServiceServiceProps,
  ThunkConfig<string>
>("fetchBlockPagesMaterialsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/block-pages-materials`,
    );

    return (await response.json()) as BlockPagesMaterial[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка материалов страниц блоков",
    );
  }
});
