import { createSelector } from "@reduxjs/toolkit";
import { documentListAdapter } from "../adapter/documentListAdapter";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

const getDocumentsListSchema = (state: StateSchema) => {
  return state.documentsList;
};

export const getDocumentsList = documentListAdapter.getSelectors<StateSchema>(
  (state) => state.documentsList ?? documentListAdapter.getInitialState(),
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
