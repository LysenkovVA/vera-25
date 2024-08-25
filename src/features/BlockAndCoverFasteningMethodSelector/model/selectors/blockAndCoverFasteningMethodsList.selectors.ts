import { createSelector } from "@reduxjs/toolkit";
import { blockAndCoverFasteningMethodsListAdapter } from "../adapter/blockAndCoverFasteningMethodsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getBlockAndCoverFasteningMethodsListSchema = (state: RootState) => {
  return state.blockAndCoverFasteningMethodsList;
};

export const getBlockAndCoverFasteningMethodsList =
  blockAndCoverFasteningMethodsListAdapter.getSelectors<RootState>(
    (state) =>
      state.blockAndCoverFasteningMethodsList ??
      blockAndCoverFasteningMethodsListAdapter.getInitialState(),
  );

export const getBlockAndCoverFasteningMethodsListIsLoading = createSelector(
  getBlockAndCoverFasteningMethodsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getBlockAndCoverFasteningMethodsListError = createSelector(
  getBlockAndCoverFasteningMethodsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getBlockAndCoverFasteningMethodsListIsInitialized = createSelector(
  getBlockAndCoverFasteningMethodsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
