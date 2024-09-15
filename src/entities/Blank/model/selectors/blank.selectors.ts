import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/shared/lib/Providers/StoreProvider/config/StateSchema";

const getBlankSchema = (state: StateSchema) => {
  return state.blankDetails;
};

export const getBlankIsLoading = createSelector(getBlankSchema, (schema) => {
  return schema?.isLoading ?? false;
});

export const getBlankError = createSelector(getBlankSchema, (schema) => {
  return schema?.error ?? false;
});

export const getBlankIsInitialized = createSelector(
  getBlankSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);

export const getBlankDetails = createSelector(getBlankSchema, (schema) => {
  return schema?.blank ?? undefined;
});

export const getBlankDetailsFormData = createSelector(
  getBlankSchema,
  (schema) => {
    return schema?.blankFormData ?? undefined;
  },
);
