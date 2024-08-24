import { createSelector } from "@reduxjs/toolkit";
import { coverTexturesListAdapter } from "../adapter/coverTexturesListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getCoverTexturesListSchema = (state: RootState) => {
  return state.coverTexturesList;
};

export const getCoverTexturesList =
  coverTexturesListAdapter.getSelectors<RootState>(
    (state) =>
      state.coverTexturesList ?? coverTexturesListAdapter.getInitialState(),
  );

export const getCoverTexturesListIsLoading = createSelector(
  getCoverTexturesListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getCoverTexturesListError = createSelector(
  getCoverTexturesListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getCoverTexturesListIsInitialized = createSelector(
  getCoverTexturesListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
