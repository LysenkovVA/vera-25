import { createSelector } from "@reduxjs/toolkit";
import { laminateTypesListAdapter } from "../adapter/laminateTypesListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getLaminateTypesListSchema = (state: RootState) => {
  return state.laminateTypesList;
};

export const getLaminateTypesList =
  laminateTypesListAdapter.getSelectors<RootState>(
    (state) =>
      state.laminateTypesList ?? laminateTypesListAdapter.getInitialState(),
  );

export const getLaminateTypesListIsLoading = createSelector(
  getLaminateTypesListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getLaminateTypesListError = createSelector(
  getLaminateTypesListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getLaminateTypesListIsInitialized = createSelector(
  getLaminateTypesListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
