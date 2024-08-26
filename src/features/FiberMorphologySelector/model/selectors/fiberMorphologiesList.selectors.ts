import { createSelector } from "@reduxjs/toolkit";
import { fiberMorphologiesListAdapter } from "../adapter/fiberMorphologiesListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getFiberMorphologiesListSchema = (state: RootState) => {
  return state.fiberMorphologiesList;
};

export const getFiberMorphologiesList =
  fiberMorphologiesListAdapter.getSelectors<RootState>(
    (state) =>
      state.fiberMorphologiesList ??
      fiberMorphologiesListAdapter.getInitialState(),
  );

export const getFiberMorphologiesListIsLoading = createSelector(
  getFiberMorphologiesListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getFiberMorphologiesListError = createSelector(
  getFiberMorphologiesListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getFiberMorphologiesListIsInitialized = createSelector(
  getFiberMorphologiesListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
