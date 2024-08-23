import { createSlice } from "@reduxjs/toolkit";
import { ManufacturersListSchema } from "../types/manufacturersListSchema";
import { fetchManufacturersListService } from "../services/fetchManufacturersList/fetchManufacturersListService";
import { manufacturerListAdapter } from "../adapter/manufacturerListAdapter";

const initialState: ManufacturersListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const manufacturersListSlice = createSlice({
  name: "manufacturersListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchManufacturersListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          manufacturerListAdapter.removeAll(state);
        }
      })
      .addCase(fetchManufacturersListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          manufacturerListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          manufacturerListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchManufacturersListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          manufacturerListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: manufacturersListActions,
  reducer: manufacturersListReducer,
} = manufacturersListSlice;
