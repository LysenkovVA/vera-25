import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { ControlParameter } from "@/entities/ControlParameter";

export interface FetchControlParametersListServiceServiceProps {
  documentId: string;
  replaceData?: boolean;
}

export const fetchControlParametersListByDocumentIdService = createAsyncThunk<
  ControlParameter[],
  FetchControlParametersListServiceServiceProps,
  ThunkConfig<string>
>("fetchControlParametersListService", async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    // Отправляем запрос
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/documents/${props.documentId}/control-parameters`,
    );

    return (await response.json()) as ControlParameter[];
  } catch (e) {
    return rejectWithValue(
      `Ошибка при получении списка контрольных параметров документа c id=${props.documentId}`,
    );
  }
});
