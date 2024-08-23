import { createSelector } from "@reduxjs/toolkit";
import { CountryListAdapter } from "../adapter/countryListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getCountriesListSchema = (state: RootState) => {
  return state.countriesList;
};

export const getCountriesList = CountryListAdapter.getSelectors<RootState>(
  (state) => state.countriesList ?? CountryListAdapter.getInitialState(),
);

export const getCountriesListIsLoading = createSelector(
  getCountriesListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getCountriesListError = createSelector(
  getCountriesListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getCountriesListIsInitialized = createSelector(
  getCountriesListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
