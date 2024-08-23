import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { SecurityLevel } from "@/entities/SecurityLevel";

export interface FetchSecurityLevelsListServiceProps {
  replaceData?: boolean;
}

export const fetchSecurityLevelsListService = createAsyncThunk<
  SecurityLevel[],
  FetchSecurityLevelsListServiceProps,
  ThunkConfig<string>
>("fetchSecurityLevelsListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/security-levels`,
    );

    return (await response.json()) as SecurityLevel[];
  } catch (e) {
    return rejectWithValue("Ошибка при получении коллекции");
  }
});
