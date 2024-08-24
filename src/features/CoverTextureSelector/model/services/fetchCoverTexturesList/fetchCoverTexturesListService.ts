import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { CoverTexture } from "@/entities/CoverTexture";

export interface FetchCoverTexturesListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchCoverTexturesListService = createAsyncThunk<
  CoverTexture[],
  FetchCoverTexturesListServiceServiceProps,
  ThunkConfig<string>
>("fetchCoverTexturesListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/cover-textures`,
    );

    return (await response.json()) as CoverTexture[];
  } catch (e) {
    return rejectWithValue(
      "Ошибка при получении списка фактур покровных материалов",
    );
  }
});
