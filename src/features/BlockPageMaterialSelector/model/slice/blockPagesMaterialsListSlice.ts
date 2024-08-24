import { createSlice } from "@reduxjs/toolkit";
import { BlockPagesMaterialsListSchema } from "../types/blockPagesMaterialsListSchema";
import { fetchBlockPagesMaterialsListService } from "../services/fetchBlockPagesMaterialsList/fetchBlockPagesMaterialsListService";
import { blockPagesMaterialsListAdapter } from "../adapter/blockPagesMaterialsListAdapter";

const initialState: BlockPagesMaterialsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const blockPagesMaterialsListSlice = createSlice({
  name: "blockPagesMaterialsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlockPagesMaterialsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          blockPagesMaterialsListAdapter.removeAll(state);
        }
      })
      .addCase(
        fetchBlockPagesMaterialsListService.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = undefined;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Записываем новые данные
            blockPagesMaterialsListAdapter.setAll(state, action.payload);
          } else {
            // Добавляем порцию данных
            blockPagesMaterialsListAdapter.addMany(state, action.payload);
          }

          state._isInitialized = true;
        },
      )
      .addCase(
        fetchBlockPagesMaterialsListService.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            blockPagesMaterialsListAdapter.removeAll(state);
          }
        },
      );
  },
});

export const {
  actions: blockPagesMaterialsListActions,
  reducer: blockPagesMaterialsListReducer,
} = blockPagesMaterialsListSlice;
