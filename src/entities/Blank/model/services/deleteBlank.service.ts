import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Blank } from "../types/blank";

export interface DeleteBlankServiceProps {
  blankId: string;
}

export const deleteBlankService = createAsyncThunk<
  Blank,
  DeleteBlankServiceProps,
  ThunkConfig<string>
>("deleteBlankService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/blanks/${props.blankId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return (await res.json()) as Blank;
  } catch (e) {
    return rejectWithValue(`Ошибка при удалении бланка`);
  }
});
