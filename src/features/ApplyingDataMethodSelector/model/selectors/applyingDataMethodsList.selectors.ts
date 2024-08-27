import { createSelector } from "@reduxjs/toolkit";
import { applyingDataMethodsListAdapter } from "../adapter/applyingDataMethodsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getApplyingDataMethodsListSchema = (state: RootState) => {
  return state.applyingDataMethodsList;
};

export const getApplyingDataMethodsList =
  applyingDataMethodsListAdapter.getSelectors<RootState>(
    (state) =>
      state.applyingDataMethodsList ??
      applyingDataMethodsListAdapter.getInitialState(),
  );

export const getApplyingDataMethodsListIsLoading = createSelector(
  getApplyingDataMethodsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getApplyingDataMethodsListError = createSelector(
  getApplyingDataMethodsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getApplyingDataMethodsListIsInitialized = createSelector(
  getApplyingDataMethodsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
