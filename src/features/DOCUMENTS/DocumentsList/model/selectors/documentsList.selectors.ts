import { createSelector } from "@reduxjs/toolkit";
import { documentsListAdapter } from "../adapter/documentsListAdapter";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

const getDocumentsListSchema = (state: StateSchema) => {
  return state.documentsList;
};

export const getDocumentsList = documentsListAdapter.getSelectors<StateSchema>(
  (state) => state.documentsList ?? documentsListAdapter.getInitialState(),
);

export const getDocumentsListIsLoading = createSelector(
  getDocumentsListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getDocumentsListError = createSelector(
  getDocumentsListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getDocumentsListIsInitialized = createSelector(
  getDocumentsListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);

export const getDocumentsListTake = createSelector(
  getDocumentsListSchema,
  (schema) => {
    return schema?.take ?? 5;
  },
);

export const getDocumentsListSkip = createSelector(
  getDocumentsListSchema,
  (schema) => {
    return schema?.skip ?? 0;
  },
);

export const getDocumentsListSearch = createSelector(
  getDocumentsListSchema,
  (schema) => {
    return schema?.search ?? "";
  },
);

export const getDocumentsListTotalCount = createSelector(
  getDocumentsListSchema,
  (schema) => {
    return schema?.totalCount ?? 0;
  },
);
