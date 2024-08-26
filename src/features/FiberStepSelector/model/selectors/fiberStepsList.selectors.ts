import { createSelector } from "@reduxjs/toolkit";
import { fiberStepsListAdapter } from "../adapter/fiberStepsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getFiberStepsListSchema = (state: RootState) => {
  return state.fiberStepsList;
};

export const getFiberStepsList = fiberStepsListAdapter.getSelectors<RootState>(
  (state) => state.fiberStepsList ?? fiberStepsListAdapter.getInitialState(),
);

export const getFiberStepsListIsLoading = createSelector(
  getFiberStepsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getFiberStepsListError = createSelector(
  getFiberStepsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getFiberStepsListIsInitialized = createSelector(
  getFiberStepsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
