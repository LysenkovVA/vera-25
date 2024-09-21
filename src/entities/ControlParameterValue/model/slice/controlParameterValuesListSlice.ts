import { createSlice } from "@reduxjs/toolkit";
import { ControlParameterValuesListSchema } from "../types/controlParameterValuesListSchema";
import { controlParameterValuesListAdapter } from "../adapter/controlParameterValuesListAdapter";
import { fetchControlParameterValuesListByControlParameterIdService } from "@/entities/ControlParameterValue/model/services/fetchControlParameterValuesListByControlParameterId/fetchControlParameterValuesListByControlParameterIdService";

const initialState: ControlParameterValuesListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const controlParameterValuesListSlice = createSlice({
  name: "controlParameterValuesListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchControlParameterValuesListByControlParameterIdService.pending,
        (state, action) => {
          state.isLoading = true;
          state.error = undefined;
          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            controlParameterValuesListAdapter.removeAll(state);
          }
        },
      )
      .addCase(
        fetchControlParameterValuesListByControlParameterIdService.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = undefined;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Записываем новые данные
            controlParameterValuesListAdapter.setAll(state, action.payload);
          } else {
            // Добавляем порцию данных
            controlParameterValuesListAdapter.addMany(state, action.payload);
          }

          state._isInitialized = true;
        },
      )
      .addCase(
        fetchControlParameterValuesListByControlParameterIdService.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            controlParameterValuesListAdapter.removeAll(state);
          }
        },
      );
  },
});

export const {
  actions: controlParameterValuesListActions,
  reducer: controlParameterValuesListReducer,
} = controlParameterValuesListSlice;
