import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { FiberStep } from "@/entities/FiberStep";

export interface FetchFiberStepsListServiceServiceProps {
  replaceData?: boolean;
}

export const fetchFiberStepsListService = createAsyncThunk<
  FiberStep[],
  FetchFiberStepsListServiceServiceProps,
  ThunkConfig<string>
>("fetchFiberStepsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/fiber-steps`,
    );

    return (await response.json()) as FiberStep[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении списка шагов нитей");
  }
});
