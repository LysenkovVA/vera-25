import { createSlice } from "@reduxjs/toolkit";
import { StaplesDistancesListSchema } from "../types/staplesDistancesListSchema";
import { fetchStaplesDistancesListService } from "@/features/StaplesDistanceSelector/model/services/fetchStaplesDistancesList/fetchStaplesDistancesListService";
import { staplesDistancesListAdapter } from "../adapter/staplesDistancesListAdapter";

const initialState: StaplesDistancesListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const staplesDistancesListSlice = createSlice({
  name: "staplesDistancesListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaplesDistancesListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          staplesDistancesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchStaplesDistancesListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          staplesDistancesListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          staplesDistancesListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchStaplesDistancesListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          staplesDistancesListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: staplesDistancesListActions,
  reducer: staplesDistancesListReducer,
} = staplesDistancesListSlice;
