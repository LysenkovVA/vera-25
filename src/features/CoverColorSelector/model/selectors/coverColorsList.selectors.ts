import { createSelector } from "@reduxjs/toolkit";
import { coverColorsListAdapter } from "../adapter/coverColorsListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getCoverColorsListSchema = (state: RootState) => {
  return state.coverColorsList;
};

export const getCoverColorsList =
  coverColorsListAdapter.getSelectors<RootState>(
    (state) =>
      state.coverColorsList ?? coverColorsListAdapter.getInitialState(),
  );

export const getCoverColorsListIsLoading = createSelector(
  getCoverColorsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getCoverColorsListError = createSelector(
  getCoverColorsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getCoverColorsListIsInitialized = createSelector(
  getCoverColorsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
