import { createSlice } from "@reduxjs/toolkit";
import { LaminateMethodsListSchema } from "../types/laminateMethodsListSchema";
import { fetchLaminateMethodsListService } from "@/features/LaminateMethodSelector/model/services/fetchLaminateMethodsList/fetchLaminateMethodsListService";
import { laminateMethodsListAdapter } from "../adapter/laminateMethodsListAdapter";

const initialState: LaminateMethodsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const laminateMethodsListSlice = createSlice({
  name: "laminateMethodsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaminateMethodsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          laminateMethodsListAdapter.removeAll(state);
        }
      })
      .addCase(fetchLaminateMethodsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          laminateMethodsListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          laminateMethodsListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchLaminateMethodsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          laminateMethodsListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: laminateMethodsListActions,
  reducer: laminateMethodsListReducer,
} = laminateMethodsListSlice;
