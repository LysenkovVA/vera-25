import { createSelector } from "@reduxjs/toolkit";
import { staplesDistancesListAdapter } from "../adapter/staplesDistancesListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getStaplesDistancesListSchema = (state: RootState) => {
  return state.staplesDistancesList;
};

export const getStaplesDistancesList =
  staplesDistancesListAdapter.getSelectors<RootState>(
    (state) =>
      state.staplesDistancesList ??
      staplesDistancesListAdapter.getInitialState(),
  );

export const getStaplesDistancesListIsLoading = createSelector(
  getStaplesDistancesListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getStaplesDistancesListError = createSelector(
  getStaplesDistancesListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getStaplesDistancesListIsInitialized = createSelector(
  getStaplesDistancesListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
