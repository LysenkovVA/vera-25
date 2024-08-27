import { createSelector } from "@reduxjs/toolkit";
import { laminateMethodsListAdapter } from "../adapter/laminateMethodsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getLaminateMethodsListSchema = (state: RootState) => {
  return state.laminateMethodsList;
};

export const getLaminateMethodsList =
  laminateMethodsListAdapter.getSelectors<RootState>(
    (state) =>
      state.laminateMethodsList ?? laminateMethodsListAdapter.getInitialState(),
  );

export const getLaminateMethodsListIsLoading = createSelector(
  getLaminateMethodsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getLaminateMethodsListError = createSelector(
  getLaminateMethodsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getLaminateMethodsListIsInitialized = createSelector(
  getLaminateMethodsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
