import { createSelector } from "@reduxjs/toolkit";
import { detailTypesListAdapter } from "../adapter/detailTypesListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getDetailTypesListSchema = (state: RootState) => {
  return state.detailTypesList;
};

export const getDetailTypesList =
  detailTypesListAdapter.getSelectors<RootState>(
    (state) =>
      state.detailTypesList ?? detailTypesListAdapter.getInitialState(),
  );

export const getDetailTypesListIsLoading = createSelector(
  getDetailTypesListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getDetailTypesListError = createSelector(
  getDetailTypesListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getDetailTypesListIsInitialized = createSelector(
  getDetailTypesListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
