import { createSlice } from "@reduxjs/toolkit";
import { FiberStepsListSchema } from "../types/fiberStepsListSchema";
import { fetchFiberStepsListService } from "@/features/FiberStepSelector/model/services/fetchFiberStepsList/fetchFiberStepsListService";
import { fiberStepsListAdapter } from "../adapter/fiberStepsListAdapter";

const initialState: FiberStepsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const fiberStepsListSlice = createSlice({
  name: "fiberStepsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiberStepsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          fiberStepsListAdapter.removeAll(state);
        }
      })
      .addCase(fetchFiberStepsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          fiberStepsListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          fiberStepsListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchFiberStepsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          fiberStepsListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: fiberStepsListActions,
  reducer: fiberStepsListReducer,
} = fiberStepsListSlice;
