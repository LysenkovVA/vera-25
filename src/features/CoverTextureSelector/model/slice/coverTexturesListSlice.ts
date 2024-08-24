import { createSlice } from "@reduxjs/toolkit";
import { CoverTexturesListSchema } from "../types/coverTexturesListSchema";
import { fetchCoverTexturesListService } from "@/features/CoverTextureSelector/model/services/fetchCoverTexturesList/fetchCoverTexturesListService";
import { coverTexturesListAdapter } from "../adapter/coverTexturesListAdapter";

const initialState: CoverTexturesListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const coverTexturesListSlice = createSlice({
  name: "coverTexturesListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoverTexturesListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          coverTexturesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchCoverTexturesListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          coverTexturesListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          coverTexturesListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchCoverTexturesListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          coverTexturesListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: coverTexturesListActions,
  reducer: coverTexturesListReducer,
} = coverTexturesListSlice;
