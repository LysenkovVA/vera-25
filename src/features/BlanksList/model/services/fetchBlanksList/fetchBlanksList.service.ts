import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { fetchBlanksAction } from "@/app/api/blanks/fetchBlanks.action";
import { BlanksResponse } from "@/app/api/blanks/route";

export interface FetchBlanksListServiceProps {
  replaceData?: boolean;
}

export const fetchBlanksListService = createAsyncThunk<
  BlanksResponse,
  FetchBlanksListServiceProps,
  ThunkConfig<string>
>("fetchBlanksListService", async (props, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi;

  const state = getState();

  try {
    // Отправляем запрос
    const response = (await fetchBlanksAction(
      state.blanksList.skip!,
      state.blanksList.take!,
      state.blanksList.search,
    )) as BlanksResponse;

    if (!response.data) {
      return rejectWithValue("Ответ от сервера не получен");
    }

    return response;
  } catch (e) {
    return rejectWithValue("Ошибка при получении коллекции");
  }
});
