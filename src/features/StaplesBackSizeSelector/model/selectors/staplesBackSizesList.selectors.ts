import { createSelector } from "@reduxjs/toolkit";
import { staplesBackSizesListAdapter } from "../adapter/staplesBackSizesListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getStaplesBackSizesListSchema = (state: RootState) => {
  return state.staplesBackSizesList;
};

export const getStaplesBackSizesList =
  staplesBackSizesListAdapter.getSelectors<RootState>(
    (state) =>
      state.staplesBackSizesList ??
      staplesBackSizesListAdapter.getInitialState(),
  );

export const getStaplesBackSizesListIsLoading = createSelector(
  getStaplesBackSizesListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getStaplesBackSizesListError = createSelector(
  getStaplesBackSizesListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getStaplesBackSizesListIsInitialized = createSelector(
  getStaplesBackSizesListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
