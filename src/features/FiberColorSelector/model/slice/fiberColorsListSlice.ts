import { createSlice } from "@reduxjs/toolkit";
import { FiberColorsListSchema } from "../types/fiberColorsListSchema";
import { fetchFiberColorsListService } from "@/features/FiberColorSelector/model/services/fetchFiberColorsList/fetchFiberColorsListService";
import { fiberColorsListAdapter } from "../adapter/fiberColorsListAdapter";

const initialState: FiberColorsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const fiberColorsListSlice = createSlice({
  name: "fiberColorsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiberColorsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          fiberColorsListAdapter.removeAll(state);
        }
      })
      .addCase(fetchFiberColorsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          fiberColorsListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          fiberColorsListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchFiberColorsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          fiberColorsListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: fiberColorsListActions,
  reducer: fiberColorsListReducer,
} = fiberColorsListSlice;
