import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/blanks/${props.id}`,
    );

    return (await res.json()) as Blank;
    // return await fetchBlankByIdAction(props.id);
  } catch (e) {
    return rejectWithValue(`Ошибка при получении бланка с id=${props.id}`);
  }
});
