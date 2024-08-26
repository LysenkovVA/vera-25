import { createSlice } from "@reduxjs/toolkit";
import { BlockPagesFasteningMethodsListSchema } from "../types/blockPagesFasteningMethodsListSchema";
import { fetchBlockPagesFasteningMethodsListService } from "@/features/BlockPagesFasteningMethodSelector/model/services/fetchBlockPagesFasteningMethodsList/fetchBlockPagesFasteningMethodsListService";
import { blockPagesFasteningMethodsListAdapter } from "../adapter/blockPagesFasteningMethodsListAdapter";

const initialState: BlockPagesFasteningMethodsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const blockPagesFasteningMethodsListSlice = createSlice({
  name: "blockPagesFasteningMethodsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchBlockPagesFasteningMethodsListService.pending,
        (state, action) => {
          state.isLoading = true;
          state.error = undefined;
          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            blockPagesFasteningMethodsListAdapter.removeAll(state);
          }
        },
      )
      .addCase(
        fetchBlockPagesFasteningMethodsListService.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = undefined;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Записываем новые данные
            blockPagesFasteningMethodsListAdapter.setAll(state, action.payload);
          } else {
            // Добавляем порцию данных
            blockPagesFasteningMethodsListAdapter.addMany(
              state,
              action.payload,
            );
          }

          state._isInitialized = true;
        },
      )
      .addCase(
        fetchBlockPagesFasteningMethodsListService.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            blockPagesFasteningMethodsListAdapter.removeAll(state);
          }
        },
      );
  },
});

export const {
  actions: blockPagesFasteningMethodsListActions,
  reducer: blockPagesFasteningMethodsListReducer,
} = blockPagesFasteningMethodsListSlice;
