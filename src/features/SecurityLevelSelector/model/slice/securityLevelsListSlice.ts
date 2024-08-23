import { createSlice } from "@reduxjs/toolkit";
import { SecurityLevelsListSchema } from "../types/securityLevelsListSchema";
import { fetchSecurityLevelsListService } from "../services/fetchSecurityLevelsList/fetchBlanksList.service";
import { securityLevelsListAdapter } from "../adapter/securityLevelsListAdapter";

const initialState: SecurityLevelsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const securityLevelsListSlice = createSlice({
  name: "securityLevelsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSecurityLevelsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          securityLevelsListAdapter.removeAll(state);
        }
      })
      .addCase(fetchSecurityLevelsListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          securityLevelsListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          securityLevelsListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchSecurityLevelsListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          securityLevelsListAdapter.removeAll(state);
        }
      });
  },
});

export const {
  actions: securityLevelsListActions,
  reducer: securityLevelsListReducer,
} = securityLevelsListSlice;
