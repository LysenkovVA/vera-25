import { createSelector } from "@reduxjs/toolkit";
import { researchMethodsListAdapter } from "../adapter/researchMethodsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getResearchMethodsListSchema = (state: RootState) => {
  return state.researchMethodsList;
};

export const getResearchMethodsList =
  researchMethodsListAdapter.getSelectors<RootState>(
    (state) =>
      state.researchMethodsList ?? researchMethodsListAdapter.getInitialState(),
  );

export const getResearchMethodsListIsLoading = createSelector(
  getResearchMethodsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getResearchMethodsListError = createSelector(
  getResearchMethodsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getResearchMethodsListIsInitialized = createSelector(
  getResearchMethodsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
