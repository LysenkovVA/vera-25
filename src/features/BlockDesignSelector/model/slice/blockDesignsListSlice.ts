import { createSlice } from "@reduxjs/toolkit";
import { BlockDesignsListSchema } from "../types/blockDesignsListSchema";
import { fetchBlockDesignsListService } from "@/features/BlockDesignSelector/model/services/fetchBlockDesignsList/fetchBlockDesignsListService";
import { blockDesignsListAdapter } from "../adapter/blockDesignsListAdapter";

const initialState: BlockDesignsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const blockDesignsListSlice = createSlice({
  name: "blockDesignsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlockDesignsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          blockDesignsListAdapter.removeAll(state);
        }
      })
      .addCase(fetchBlockDesignsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          blockDesignsListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          blockDesignsListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchBlockDesignsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          blockDesignsListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: blockDesignsListActions,
  reducer: blockDesignsListReducer,
} = blockDesignsListSlice;
