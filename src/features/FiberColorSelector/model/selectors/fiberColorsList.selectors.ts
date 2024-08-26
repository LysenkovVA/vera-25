import { createSelector } from "@reduxjs/toolkit";
import { fiberColorsListAdapter } from "../adapter/fiberColorsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getFiberColorsListSchema = (state: RootState) => {
  return state.fiberColorsList;
};

export const getFiberColorsList =
  fiberColorsListAdapter.getSelectors<RootState>(
    (state) =>
      state.fiberColorsList ?? fiberColorsListAdapter.getInitialState(),
  );

export const getFiberColorsListIsLoading = createSelector(
  getFiberColorsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getFiberColorsListError = createSelector(
  getFiberColorsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getFiberColorsListIsInitialized = createSelector(
  getFiberColorsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
