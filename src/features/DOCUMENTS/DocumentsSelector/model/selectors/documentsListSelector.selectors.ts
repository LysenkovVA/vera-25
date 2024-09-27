import { createSelector } from "@reduxjs/toolkit";
import { documentListSelectorAdapter } from "../adapter/documentListSelectorAdapter";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

const getDocumentsListSelectorSchema = (state: StateSchema) => {
  return state.documentsListSelector;
};

export const getDocumentsListSelector =
  documentListSelectorAdapter.getSelectors<StateSchema>(
    (state) =>
      state.documentsListSelector ??
      documentListSelectorAdapter.getInitialState(),
  );

export const getDocumentsListSelectorIsLoading = createSelector(
  getDocumentsListSelectorSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getDocumentsListSelectorError = createSelector(
  getDocumentsListSelectorSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getDocumentsListSelectorIsInitialized = createSelector(
  getDocumentsListSelectorSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
