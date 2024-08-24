import { createSelector } from "@reduxjs/toolkit";
import { blockPagesMaterialsListAdapter } from "../adapter/blockPagesMaterialsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getBlockPagesMaterialsListSchema = (state: RootState) => {
  return state.blockPagesMaterialsList;
};

export const getBlockPagesMaterialsList =
  blockPagesMaterialsListAdapter.getSelectors<RootState>(
    (state) =>
      state.blockPagesMaterialsList ??
      blockPagesMaterialsListAdapter.getInitialState(),
  );

export const getBlockPagesMaterialsListIsLoading = createSelector(
  getBlockPagesMaterialsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getBlockPagesMaterialsListError = createSelector(
  getBlockPagesMaterialsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getBlockPagesMaterialsListIsInitialized = createSelector(
  getBlockPagesMaterialsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
