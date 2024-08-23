import { createSelector } from "@reduxjs/toolkit";
import { securityLevelsListAdapter } from "../adapter/securityLevelsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getSecurityLevelsListSchema = (state: RootState) => {
  return state.securityLevelsList;
};

export const getSecurityLevelsList =
  securityLevelsListAdapter.getSelectors<RootState>(
    (state) =>
      state.securityLevelsList ?? securityLevelsListAdapter.getInitialState(),
  );

export const getSecurityLevelsListIsLoading = createSelector(
  getSecurityLevelsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getSecurityLevelsListError = createSelector(
  getSecurityLevelsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getSecurityLevelsListIsInitialized = createSelector(
  getSecurityLevelsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
