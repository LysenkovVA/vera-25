import { createSlice } from "@reduxjs/toolkit";
import { FiberMorphologiesListSchema } from "../types/fiberMorphologiesListSchema";
import { fiberMorphologiesListAdapter } from "../adapter/fiberMorphologiesListAdapter";
import { fetchFiberMorphologiesListService } from "@/features/FiberMorphologySelector/model/services/fetchFiberMorphologiesList/fetchFiberMorphologiesListService";

const initialState: FiberMorphologiesListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const fiberMorphologiesListSlice = createSlice({
  name: "fiberMorphologiesListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiberMorphologiesListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          fiberMorphologiesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchFiberMorphologiesListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          fiberMorphologiesListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          fiberMorphologiesListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchFiberMorphologiesListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          fiberMorphologiesListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: fiberMorphologiesListActions,
  reducer: fiberMorphologiesListReducer,
} = fiberMorphologiesListSlice;
