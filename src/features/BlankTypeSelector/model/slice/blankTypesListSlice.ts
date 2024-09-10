import { createSlice } from "@reduxjs/toolkit";
import { BlankTypesListSchema } from "../types/blankTypesListSchema";
import { fetchBlankTypesListService } from "@/features/BlankTypeSelector/model/services/fetchBlankTypesList/fetchBlankTypesListService";
import { blankTypesListAdapter } from "../adapter/blankTypesListAdapter";

const initialState: BlankTypesListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const blankTypesListSlice = createSlice({
  name: "blankTypesListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlankTypesListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          blankTypesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchBlankTypesListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          blankTypesListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          blankTypesListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchBlankTypesListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          blankTypesListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: blankTypesListActions,
  reducer: blankTypesListReducer,
} = blankTypesListSlice;
