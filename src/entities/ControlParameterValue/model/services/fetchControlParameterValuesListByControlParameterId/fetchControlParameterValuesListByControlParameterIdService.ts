import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/shared/lib/Providers/StoreProvider/config/store";
import { ControlParameter } from "@/entities/ControlParameter";

export interface FetchControlParameterValuesListServiceServiceProps {
  controlParameterId: string;
  replaceData?: boolean;
}

export const fetchControlParameterValuesListByControlParameterIdService =
  createAsyncThunk<
    ControlParameter[],
    FetchControlParameterValuesListServiceServiceProps,
    ThunkConfig<string>
  >(
    "fetchControlParameterValuesListByControlParameterIdService",
    async (props, thunkApi) => {
      const { rejectWithValue } = thunkApi;

      try {
        // Отправляем запрос
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_PATH}/control-parameters/${props.controlParameterId}/control-parameter-values`,
        );

        return (await response.json()) as ControlParameter[];
      } catch (e) {
        return rejectWithValue(
          `Ошибка при получении списка значений контрольных параметров контрольного параметра c id=${props.controlParameterId}`,
        );
      }
    },
  );
