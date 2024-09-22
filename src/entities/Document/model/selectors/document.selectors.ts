import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

const getDocumentSchema = (state: StateSchema) => {
  return state.documentDetails;
};

export const getDocumentIsLoading = createSelector(
  getDocumentSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getDocumentError = createSelector(getDocumentSchema, (schema) => {
  return schema?.error ?? false;
});

export const getDocumentIsInitialized = createSelector(
  getDocumentSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);

export const getDocumentDetails = createSelector(
  getDocumentSchema,
  (schema) => {
    return schema?.document ?? undefined;
  },
);

export const getDocumentDetailsFormData = createSelector(
  getDocumentSchema,
  (schema) => {
    return schema?.documentFormData ?? undefined;
  },
);
