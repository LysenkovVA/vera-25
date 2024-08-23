import { createSelector } from "@reduxjs/toolkit";
import { manufacturerListAdapter } from "../adapter/manufacturerListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getManufacturersListSchema = (state: RootState) => {
  return state.manufacturersList;
};

export const getManufacturersList =
  manufacturerListAdapter.getSelectors<RootState>(
    (state) =>
      state.manufacturersList ?? manufacturerListAdapter.getInitialState(),
  );

export const getManufacturersListIsLoading = createSelector(
  getManufacturersListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getManufacturersListError = createSelector(
  getManufacturersListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getManufacturersListIsInitialized = createSelector(
  getManufacturersListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
