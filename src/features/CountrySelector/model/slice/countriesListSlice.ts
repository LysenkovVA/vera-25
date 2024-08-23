import { createSlice } from "@reduxjs/toolkit";
import { CountriesListSchema } from "../types/countriesListSchema";
import { fetchCountriesListService } from "@/features/CountrySelector/model/services/fetchCountriesList/fetchBlanksList.service";
import { CountryListAdapter } from "../adapter/countryListAdapter";

const initialState: CountriesListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  _isInitialized: false,
};

export const countriesListSlice = createSlice({
  name: "countriesListSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountriesListService.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          CountryListAdapter.removeAll(state);
        }
      })
      .addCase(fetchCountriesListService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Записываем новые данные
          CountryListAdapter.setAll(state, action.payload);
        } else {
          // Добавляем порцию данных
          CountryListAdapter.addMany(state, action.payload);
        }

        state._isInitialized = true;
      })
      .addCase(fetchCountriesListService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        // Если данные заменяются
        if (action.meta.arg.replaceData) {
          // Очищаем старые
          CountryListAdapter.removeAll(state);
        }
      });
  },
});

export const { actions: countriesListActions, reducer: countriesListReducer } =
  countriesListSlice;
