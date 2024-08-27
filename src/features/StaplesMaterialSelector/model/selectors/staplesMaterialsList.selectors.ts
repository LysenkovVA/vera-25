import { createSelector } from "@reduxjs/toolkit";
import { staplesMaterialsListAdapter } from "../adapter/staplesMaterialsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getStaplesMaterialsListSchema = (state: RootState) => {
  return state.staplesMaterialsList;
};

export const getStaplesMaterialsList =
  staplesMaterialsListAdapter.getSelectors<RootState>(
    (state) =>
      state.staplesMaterialsList ??
      staplesMaterialsListAdapter.getInitialState(),
  );

export const getStaplesMaterialsListIsLoading = createSelector(
  getStaplesMaterialsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getStaplesMaterialsListError = createSelector(
  getStaplesMaterialsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getStaplesMaterialsListIsInitialized = createSelector(
  getStaplesMaterialsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
