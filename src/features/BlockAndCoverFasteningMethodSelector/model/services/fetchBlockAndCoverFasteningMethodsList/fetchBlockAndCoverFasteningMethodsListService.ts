import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { BlockAndCoverFasteningMethod } from "@/entities/BlockAndCoverFasteningMethod";

export interface FetchBlockAndCoverFasteningMethodsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchBlockAndCoverFasteningMethodsListService = createAsyncThunk<
  BlockAndCoverFasteningMethod[],
  FetchBlockAndCoverFasteningMethodsListServiceServiceProps,
  ThunkConfig<string>
>("fetchBlockAndCoverFasteningMethodsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/block-and-cover-fastening-methods`,
    );

    return (await response.json()) as BlockAndCoverFasteningMethod[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка скрепления блока и обложки",
    );
  }
});
