import { createSelector } from "@reduxjs/toolkit";
import { blockCornersDesignsListAdapter } from "../adapter/blockCornersDesignsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getBlockCornersDesignsListSchema = (state: RootState) => {
  return state.blockCornersDesignsList;
};

export const getBlockCornersDesignsList =
  blockCornersDesignsListAdapter.getSelectors<RootState>(
    (state) =>
      state.blockCornersDesignsList ??
      blockCornersDesignsListAdapter.getInitialState(),
  );

export const getBlockCornersDesignsListIsLoading = createSelector(
  getBlockCornersDesignsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getBlockCornersDesignsListError = createSelector(
  getBlockCornersDesignsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getBlockCornersDesignsListIsInitialized = createSelector(
  getBlockCornersDesignsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
