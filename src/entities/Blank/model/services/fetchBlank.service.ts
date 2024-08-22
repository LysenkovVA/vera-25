import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { fetchBlankByIdAction } from "@/app/api/blanks/[id]/fetchBlankById.action";
import { Blank } from "../types/blank";

export interface FetchBlankByIdProps {
  id: string;
}

export const fetchBlankByIdService = createAsyncThunk<
  Blank,
  FetchBlankByIdProps,
  ThunkConfig<string>
>("fetchBlankByIdService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    return await fetchBlankByIdAction(props.id);
  } catch (e) {
    return rejectWithValue(`Ошибка при получении бланка с id=${props.id}`);
  }
});
