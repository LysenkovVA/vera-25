import { createSlice } from "@reduxjs/toolkit";
import { ResearchMethodsListSchema } from "../types/researchMethodsListSchema";
import { researchMethodsListAdapter } from "../adapter/researchMethodsListAdapter";
import { fetchResearchMethodsListService } from "../services/fetchResearchMethodsList/fetchResearchMethodsListService";

const initialState: ResearchMethodsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const researchMethodsListSlice = createSlice({
  name: "researchMethodsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResearchMethodsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          researchMethodsListAdapter.removeAll(state);
        }
      })
      .addCase(fetchResearchMethodsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          researchMethodsListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          researchMethodsListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchResearchMethodsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          researchMethodsListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: researchMethodsListActions,
  reducer: researchMethodsListReducer,
} = researchMethodsListSlice;
