import { createSelector } from "@reduxjs/toolkit";
import { coverDesignsListAdapter } from "../adapter/coverDesignsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getCoverDesignsListSchema = (state: RootState) => {
  return state.coverDesignsList;
};

export const getCoverDesignsList =
  coverDesignsListAdapter.getSelectors<RootState>(
    (state) =>
      state.coverDesignsList ?? coverDesignsListAdapter.getInitialState(),
  );

export const getCoverDesignsListIsLoading = createSelector(
  getCoverDesignsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getCoverDesignsListError = createSelector(
  getCoverDesignsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getCoverDesignsListIsInitialized = createSelector(
  getCoverDesignsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
