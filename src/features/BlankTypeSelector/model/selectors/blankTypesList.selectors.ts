import { createSelector } from "@reduxjs/toolkit";
import { blankTypesListAdapter } from "../adapter/blankTypesListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getBlankTypesListSchema = (state: RootState) => {
  return state.blankTypesList;
};

export const getBlankTypesList = blankTypesListAdapter.getSelectors<RootState>(
  (state) => state.blankTypesList ?? blankTypesListAdapter.getInitialState(),
);

export const getBlankTypesListIsLoading = createSelector(
  getBlankTypesListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getBlankTypesListError = createSelector(
  getBlankTypesListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getBlankTypesListIsInitialized = createSelector(
  getBlankTypesListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
