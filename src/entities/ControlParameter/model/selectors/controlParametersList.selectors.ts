import { createSelector } from "@reduxjs/toolkit";
import { controlParametersListAdapter } from "../adapter/controlParametersListAdapter";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

const getControlParametersListSchema = (state: StateSchema) => {
  return state.controlParametersList;
};

export const getControlParametersList =
  controlParametersListAdapter.getSelectors<StateSchema>(
    (state) =>
      state.controlParametersList ??
      controlParametersListAdapter.getInitialState(),
  );

export const getControlParametersListIsLoading = createSelector(
  getControlParametersListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getControlParametersListError = createSelector(
  getControlParametersListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getControlParametersListIsInitialized = createSelector(
  getControlParametersListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
