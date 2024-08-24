import { createSlice } from "@reduxjs/toolkit";
import { CoverDesignsListSchema } from "../types/coverDesignsListSchema";
import { fetchCoverDesignsListService } from "../services/fetchCoverDesignsList/fetchCoverDesignsListService";
import { coverDesignsListAdapter } from "../adapter/coverDesignsListAdapter";

const initialState: CoverDesignsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const coverDesignsListSlice = createSlice({
  name: "coverDesignsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoverDesignsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          coverDesignsListAdapter.removeAll(state);
        }
      })
      .addCase(fetchCoverDesignsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          coverDesignsListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          coverDesignsListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchCoverDesignsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          coverDesignsListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: coverDesignsListActions,
  reducer: coverDesignsListReducer,
} = coverDesignsListSlice;
