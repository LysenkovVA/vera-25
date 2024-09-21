import { createSelector } from "@reduxjs/toolkit";
import { controlParameterValuesListAdapter } from "../adapter/controlParameterValuesListAdapter";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

const getControlParameterValuesListSchema = (state: StateSchema) => {
  return state.controlParameterValuesList;
};

export const getControlParameterValuesList =
  controlParameterValuesListAdapter.getSelectors<StateSchema>(
    (state) =>
      state.controlParameterValuesList ??
      controlParameterValuesListAdapter.getInitialState(),
  );

export const getControlParameterValuesListIsLoading = createSelector(
  getControlParameterValuesListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getControlParameterValuesListError = createSelector(
  getControlParameterValuesListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getControlParameterValuesListIsInitialized = createSelector(
  getControlParameterValuesListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
