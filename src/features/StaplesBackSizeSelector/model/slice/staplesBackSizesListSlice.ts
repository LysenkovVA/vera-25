import { createSlice } from "@reduxjs/toolkit";
import { StaplesBackSizesListSchema } from "../types/staplesBackSizesListSchema";
import { fetchStaplesBackSizesListService } from "@/features/StaplesBackSizeSelector/model/services/fetchStaplesBackSizesList/fetchStaplesBackSizesListService";
import { staplesBackSizesListAdapter } from "../adapter/staplesBackSizesListAdapter";

const initialState: StaplesBackSizesListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const staplesBackSizesListSlice = createSlice({
  name: "staplesBackSizesListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaplesBackSizesListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          staplesBackSizesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchStaplesBackSizesListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          staplesBackSizesListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          staplesBackSizesListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchStaplesBackSizesListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          staplesBackSizesListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: staplesBackSizesListActions,
  reducer: staplesBackSizesListReducer,
} = staplesBackSizesListSlice;
