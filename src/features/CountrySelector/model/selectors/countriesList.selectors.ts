import { createSelector } from "@reduxjs/toolkit";
import { CountryListAdapter } from "../adapter/countryListAdapter";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

const getCountriesListSchema = (state: StateSchema) => {
  return state.countriesList;
};

export const getCountriesList = CountryListAdapter.getSelectors<StateSchema>(
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
