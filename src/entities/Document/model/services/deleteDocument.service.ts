import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Document } from "../types/document";

export interface DeleteDocumentServiceProps {
  documentId: string;
}

export const deleteDocumentService = createAsyncThunk<
  Document,
  DeleteDocumentServiceProps,
  ThunkConfig<string>
>("deleteDocumentService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/documents/${props.documentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return (await res.json()) as Document;
  } catch (e) {
    return rejectWithValue(`Ошибка при удалении документа`);
  }
});
