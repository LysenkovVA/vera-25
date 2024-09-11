import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Blank } from "../types/blank";

export interface UpsertBlankProps {
  blank: Blank;
}

export const upsertBlankService = createAsyncThunk<
  Blank,
  UpsertBlankProps,
  ThunkConfig<string>
>("upsertBlankService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/blanks/upsert`,
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
    return rejectWithValue(`Ошибка при сохранении бланка`);
  }
});
