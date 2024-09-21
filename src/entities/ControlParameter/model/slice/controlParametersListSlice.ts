import { createSlice } from "@reduxjs/toolkit";
import { ControlParametersListSchema } from "../types/controlParametersListSchema";
import { fetchControlParametersListByDocumentIdService } from "@/entities/ControlParameter/model/services/fetchControlParametersListByDocumentId/fetchControlParametersListByDocumentIdService";
import { controlParametersListAdapter } from "../adapter/controlParametersListAdapter";

const initialState: ControlParametersListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const controlParametersListSlice = createSlice({
  name: "controlParametersListSlice",
  initialState,
  reducers: {
    clearControlParametersList: (state: ControlParametersListSchema) => {
      controlParametersListAdapter.removeAll(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchControlParametersListByDocumentIdService.pending,
        (state, action) => {
          state.isLoading = true;
          state.error = undefined;
          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            controlParametersListAdapter.removeAll(state);
          }
        },
      )
      .addCase(
        fetchControlParametersListByDocumentIdService.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = undefined;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Записываем новые данные
            controlParametersListAdapter.setAll(state, action.payload);
          } else {
            // Добавляем порцию данных
            controlParametersListAdapter.addMany(state, action.payload);
          }

          state._isInitialized = true;
        },
      )
      .addCase(
        fetchControlParametersListByDocumentIdService.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            controlParametersListAdapter.removeAll(state);
          }
        },
      );
  },
});

export const {
  actions: controlParametersListActions,
  reducer: controlParametersListReducer,
} = controlParametersListSlice;
