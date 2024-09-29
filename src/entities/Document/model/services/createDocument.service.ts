import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { Document } from "../types/document";
import { createDocument } from "@/app/api/documents/create/actions/createDocument";

export interface CreateDocumentProps {
  document: Document;
}

export const createDocumentService = createAsyncThunk<
  Document,
  CreateDocumentProps,
  ThunkConfig<string>
>("createDocumentService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const res = await createDocument(props.document);

    if (!res.isOk) {
      return rejectWithValue(res.errorsString);
    }

    return res.data;
  } catch (e) {
    return rejectWithValue(
      `Произошла неизвестная ошибка при создании документа: ${JSON.stringify(e)}`,
    );
  }
});
