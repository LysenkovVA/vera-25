import { createSlice } from "@reduxjs/toolkit";
import { CoverColorsListSchema } from "../types/coverColorsListSchema";
import { fetchCoverColorsListService } from "@/features/CoverColorSelector/model/services/fetchCoverColorsList/fetchCoverColorsListService";
import { coverColorsListAdapter } from "../adapter/coverColorsListAdapter";

const initialState: CoverColorsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const coverColorsListSlice = createSlice({
  name: "coverColorsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoverColorsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          coverColorsListAdapter.removeAll(state);
        }
      })
      .addCase(fetchCoverColorsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          coverColorsListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          coverColorsListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchCoverColorsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          coverColorsListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: coverColorsListActions,
  reducer: coverColorsListReducer,
} = coverColorsListSlice;
