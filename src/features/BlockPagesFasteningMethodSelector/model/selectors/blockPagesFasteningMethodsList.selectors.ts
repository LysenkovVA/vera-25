import { createSelector } from "@reduxjs/toolkit";
import { blockPagesFasteningMethodsListAdapter } from "../adapter/blockPagesFasteningMethodsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getBlockPagesFasteningMethodsListSchema = (state: RootState) => {
  return state.blockPagesFasteningMethodsList;
};

export const getBlockPagesFasteningMethodsList =
  blockPagesFasteningMethodsListAdapter.getSelectors<RootState>(
    (state) =>
      state.blockPagesFasteningMethodsList ??
      blockPagesFasteningMethodsListAdapter.getInitialState(),
  );

export const getBlockPagesFasteningMethodsListIsLoading = createSelector(
  getBlockPagesFasteningMethodsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getBlockPagesFasteningMethodsListError = createSelector(
  getBlockPagesFasteningMethodsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getBlockPagesFasteningMethodsListIsInitialized = createSelector(
  getBlockPagesFasteningMethodsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
