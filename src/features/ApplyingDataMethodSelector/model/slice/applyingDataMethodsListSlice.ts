import { createSlice } from "@reduxjs/toolkit";
import { ApplyingDataMethodsListSchema } from "../types/applyingDataMethodsListSchema";
import { fetchApplyingDataMethodsListService } from "@/features/ApplyingDataMethodSelector/model/services/fetchApplyingDataMethodsList/fetchApplyingDataMethodsListService";
import { applyingDataMethodsListAdapter } from "../adapter/applyingDataMethodsListAdapter";

const initialState: ApplyingDataMethodsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const applyingDataMethodsListSlice = createSlice({
  name: "applyingDataMethodsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplyingDataMethodsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          applyingDataMethodsListAdapter.removeAll(state);
        }
      })
      .addCase(
        fetchApplyingDataMethodsListService.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = undefined;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Записываем новые данные
            applyingDataMethodsListAdapter.setAll(state, action.payload);
          } else {
            // Добавляем порцию данных
            applyingDataMethodsListAdapter.addMany(state, action.payload);
          }

          state._isInitialized = true;
        },
      )
      .addCase(
        fetchApplyingDataMethodsListService.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            applyingDataMethodsListAdapter.removeAll(state);
          }
        },
      );
  },
});

export const {
  actions: applyingDataMethodsListActions,
  reducer: applyingDataMethodsListReducer,
} = applyingDataMethodsListSlice;
