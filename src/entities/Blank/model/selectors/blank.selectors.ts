import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";
import { createSelector } from "@reduxjs/toolkit";

const getBlankSchema = (state: RootState) => {
  return state.blankDetails;
};

export const getBlankIsLoading = createSelector(getBlankSchema, (schema) => {
  return schema?.isLoading ?? false;
});

export const getBlankError = createSelector(getBlankSchema, (schema) => {
  return schema?.error ?? false;
});

export const getBlankDetails = createSelector(getBlankSchema, (schema) => {
  return schema?.blank ?? false;
});

export const getBlankDetailsFormData = createSelector(
  getBlankSchema,
  (schema) => {
    return schema?.blankFormData ?? false;
  },
);
