import { createSlice } from "@reduxjs/toolkit";
import { DetailTypesListSchema } from "../types/detailTypesListSchema";
import { fetchDetailTypesListService } from "@/features/DetailTypeSelector/model/services/fetchDetailTypesList/fetchDetailTypesListService";
import { detailTypesListAdapter } from "../adapter/detailTypesListAdapter";

const initialState: DetailTypesListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const detailTypesListSlice = createSlice({
  name: "detailTypesListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailTypesListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          detailTypesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchDetailTypesListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          detailTypesListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          detailTypesListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchDetailTypesListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          detailTypesListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: detailTypesListActions,
  reducer: detailTypesListReducer,
} = detailTypesListSlice;
