import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Document } from "../types/document";

export interface FetchDocumentByIdProps {
  id: string;
}

export const fetchDocumentByIdService = createAsyncThunk<
  Document,
  FetchDocumentByIdProps,
  ThunkConfig<string>
>("fetchDocumentByIdService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/documents/${props.id}`,
    );

    return (await res.json()) as Document;
    // return await fetchDocumentByIdAction(props.id);
  } catch (e) {
    return rejectWithValue(`Ошибка при получении документа с id=${props.id}`);
  }
});
