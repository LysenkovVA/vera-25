import { createSlice } from "@reduxjs/toolkit";
import { LaminateTypesListSchema } from "../types/laminateTypesListSchema";
import { fetchLaminateTypesListService } from "@/features/LaminateTypeSelector/model/services/fetchLaminateTypesList/fetchLaminateTypesListService";
import { laminateTypesListAdapter } from "../adapter/laminateTypesListAdapter";

const initialState: LaminateTypesListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const laminateTypesListSlice = createSlice({
  name: "laminateTypesListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaminateTypesListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          laminateTypesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchLaminateTypesListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          laminateTypesListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          laminateTypesListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchLaminateTypesListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          laminateTypesListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: laminateTypesListActions,
  reducer: laminateTypesListReducer,
} = laminateTypesListSlice;
