import { createSelector } from "@reduxjs/toolkit";
import { coverImageMethodsListAdapter } from "../adapter/coverImageMethodsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getCoverImageMethodsListSchema = (state: RootState) => {
  return state.coverImageMethodsList;
};

export const getCoverImageMethodsList =
  coverImageMethodsListAdapter.getSelectors<RootState>(
    (state) =>
      state.coverImageMethodsList ??
      coverImageMethodsListAdapter.getInitialState(),
  );

export const getCoverImageMethodsListIsLoading = createSelector(
  getCoverImageMethodsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getCoverImageMethodsListError = createSelector(
  getCoverImageMethodsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getCoverImageMethodsListIsInitialized = createSelector(
  getCoverImageMethodsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
