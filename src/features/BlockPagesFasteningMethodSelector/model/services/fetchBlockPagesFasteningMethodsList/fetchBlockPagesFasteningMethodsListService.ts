import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { BlockPagesFasteningMethod } from "@/entities/BlockPagesFasteningMethod";

export interface FetchBlockPagesFasteningMethodsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchBlockPagesFasteningMethodsListService = createAsyncThunk<
  BlockPagesFasteningMethod[],
  FetchBlockPagesFasteningMethodsListServiceServiceProps,
  ThunkConfig<string>
>("fetchBlockPagesFasteningMethodsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/block-pages-fastening-methods`,
    );

    return (await response.json()) as BlockPagesFasteningMethod[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка скрепления страниц блока",
    );
  }
});
