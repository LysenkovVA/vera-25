import { createSelector } from "@reduxjs/toolkit";
import { blanksListAdapter } from "../adapter/blanksList.adapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";

const getBlanksListSchema = (state: RootState) => {
  return state.blanksList;
};

export const getBlanksList = blanksListAdapter.getSelectors<RootState>(
  (state) => state.blanksList ?? blanksListAdapter.getInitialState(),
);

export const getBlanksListIsLoading = createSelector(
  getBlanksListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getBlanksListError = createSelector(
  getBlanksListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getBlanksListIsInitialized = createSelector(
  getBlanksListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);

export const getBlanksListTake = createSelector(
  getBlanksListSchema,
  (schema) => {
    return schema?.take ?? 5;
  },
);

export const getBlanksListSkip = createSelector(
  getBlanksListSchema,
  (schema) => {
    return schema?.skip ?? 0;
  },
);

export const getBlanksListSearch = createSelector(
  getBlanksListSchema,
  (schema) => {
    return schema?.search ?? "";
  },
);

export const getBlanksListTotalCount = createSelector(
  getBlanksListSchema,
  (schema) => {
    return schema?.totalCount ?? 0;
  },
);
