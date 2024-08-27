import { createSlice } from "@reduxjs/toolkit";
import { StaplesMaterialsListSchema } from "../types/staplesMaterialsListSchema";
import { fetchStaplesMaterialsListService } from "@/features/StaplesMaterialSelector/model/services/fetchStaplesMaterialsList/fetchStaplesMaterialsListService";
import { staplesMaterialsListAdapter } from "../adapter/staplesMaterialsListAdapter";

const initialState: StaplesMaterialsListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const staplesMaterialsListSlice = createSlice({
  name: "staplesMaterialsListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaplesMaterialsListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          staplesMaterialsListAdapter.removeAll(state);
        }
      })
      .addCase(
        fetchStaplesMaterialsListService.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = undefined;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Записываем новые данные
            staplesMaterialsListAdapter.setAll(state, action.payload);
          } else {
            // Добавляем порцию данных
            staplesMaterialsListAdapter.addMany(state, action.payload);
          }

          state._isInitialized = true;
        },
      )
      .addCase(
        fetchStaplesMaterialsListService.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;

          // Если данные заменяются
          if (action.meta.arg.replaceData) {
            // Очищаем старые
            staplesMaterialsListAdapter.removeAll(state);
          }
        },
      );
  },
});

export const {
  actions: staplesMaterialsListActions,
  reducer: staplesMaterialsListReducer,
} = staplesMaterialsListSlice;
