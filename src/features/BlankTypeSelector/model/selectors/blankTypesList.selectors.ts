import { createSelector } from "@reduxjs/toolkit";
import { blankTypesListAdapter } from "../adapter/blankTypesListAdapter";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

const getBlankTypesListSchema = (state: StateSchema) => {
  return state.blankTypesList;
};

export const getBlankTypesList =
  blankTypesListAdapter.getSelectors<StateSchema>(
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
