import { createSlice } from "@reduxjs/toolkit";
import { CoverImageMethodsListSchema } from "../types/coverImageMethodsListSchema";
import { fetchCoverImageMethodsListService } from "@/features/CoverImageMethodSelector/model/services/fetchCoverImageMethodsList/fetchCoverImageMethodsListService";
import { coverImageMethodsListAdapter } from "../adapter/coverImageMethodsListAdapter";

const initialState: CoverImageMethodsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const coverImageMethodsListSlice = createSlice({
  name: "coverImageMethodsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoverImageMethodsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          coverImageMethodsListAdapter.removeAll(state);
        }
      })
      .addCase(fetchCoverImageMethodsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          coverImageMethodsListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          coverImageMethodsListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchCoverImageMethodsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          coverImageMethodsListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: coverImageMethodsListActions,
  reducer: coverImageMethodsListReducer,
} = coverImageMethodsListSlice;
