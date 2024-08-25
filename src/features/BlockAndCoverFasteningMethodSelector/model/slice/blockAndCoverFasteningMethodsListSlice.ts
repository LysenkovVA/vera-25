import { createSlice } from "@reduxjs/toolkit";
import { BlockAndCoverFasteningMethodsListSchema } from "../types/blockAndCoverFasteningMethodsListSchema";
import { fetchBlockAndCoverFasteningMethodsListService } from "@/features/BlockAndCoverFasteningMethodSelector/model/services/fetchBlockAndCoverFasteningMethodsList/fetchBlockAndCoverFasteningMethodsListService";
import { blockAndCoverFasteningMethodsListAdapter } from "../adapter/blockAndCoverFasteningMethodsListAdapter";

const initialState: BlockAndCoverFasteningMethodsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const blockAndCoverFasteningMethodsListSlice = createSlice({
  name: "blockAndCoverFasteningMethodsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchBlockAndCoverFasteningMethodsListService.pending,
        (state, action) => {
          state.isLoading = true;
          state.error = undefined;
          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            blockAndCoverFasteningMethodsListAdapter.removeAll(state);
          }
        },
      )
      .addCase(
        fetchBlockAndCoverFasteningMethodsListService.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = undefined;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Записываем новые данные
            blockAndCoverFasteningMethodsListAdapter.setAll(
              state,
              action.payload,
            );
          } else {
            // Добавляем порцию данных
            blockAndCoverFasteningMethodsListAdapter.addMany(
              state,
              action.payload,
            );
          }

          state._isInitialized = true;
        },
      )
      .addCase(
        fetchBlockAndCoverFasteningMethodsListService.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            blockAndCoverFasteningMethodsListAdapter.removeAll(state);
          }
        },
      );
  },
});

export const {
  actions: blockAndCoverFasteningMethodsListActions,
  reducer: blockAndCoverFasteningMethodsListReducer,
} = blockAndCoverFasteningMethodsListSlice;
