import { createSelector } from "@reduxjs/toolkit";
import { blockDesignsListAdapter } from "../adapter/blockDesignsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getBlockDesignsListSchema = (state: RootState) => {
  return state.blockDesignsList;
};

export const getBlockDesignsList =
  blockDesignsListAdapter.getSelectors<RootState>(
    (state) =>
      state.blockDesignsList ?? blockDesignsListAdapter.getInitialState(),
  );

export const getBlockDesignsListIsLoading = createSelector(
  getBlockDesignsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getBlockDesignsListError = createSelector(
  getBlockDesignsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getBlockDesignsListIsInitialized = createSelector(
  getBlockDesignsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
