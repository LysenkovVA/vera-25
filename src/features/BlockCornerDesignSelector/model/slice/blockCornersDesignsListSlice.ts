import { createSlice } from "@reduxjs/toolkit";
import { BlockCornersDesignsListSchema } from "../types/blockCornersDesignsListSchema";
import { fetchBlockCornersDesignsListService } from "../services/fetchBlockCornersDesignsList/fetchBlockCornersDesignsListService";
import { blockCornersDesignsListAdapter } from "../adapter/blockCornersDesignsListAdapter";

const initialState: BlockCornersDesignsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const blockCornersDesignsListSlice = createSlice({
  name: "blockCornersDesignsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlockCornersDesignsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          blockCornersDesignsListAdapter.removeAll(state);
        }
      })
      .addCase(
        fetchBlockCornersDesignsListService.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = undefined;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Записываем новые данные
            blockCornersDesignsListAdapter.setAll(state, action.payload);
          } else {
            // Добавляем порцию данных
            blockCornersDesignsListAdapter.addMany(state, action.payload);
          }

          state._isInitialized = true;
        },
      )
      .addCase(
        fetchBlockCornersDesignsListService.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            blockCornersDesignsListAdapter.removeAll(state);
          }
        },
      );
  },
});

export const {
  actions: blockCornersDesignsListActions,
  reducer: blockCornersDesignsListReducer,
} = blockCornersDesignsListSlice;
