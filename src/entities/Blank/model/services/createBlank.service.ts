import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Blank } from "../types/blank";

export interface CreateBlankProps {
  blank: Blank;
}

export const createBlankService = createAsyncThunk<
  Blank,
  CreateBlankProps,
  ThunkConfig<string>
>("createBlankService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/blanks/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.blank),
      },
    );
    return (await res.json()) as Blank;
  } catch (e) {
    return rejectWithValue(`Ошибка при добавлении бланка`);
  }
});
