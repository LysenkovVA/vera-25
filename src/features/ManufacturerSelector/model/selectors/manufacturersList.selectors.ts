import { manufacturerListAdapter } from "../adapter/manufacturerListAdapter";
import { RootState } from "@/shared/lib/Providers/StoreProvider/config/store";
import { createAppSelector } from "@/shared/lib/Providers/StoreProvider/hooks/hooks";

const getManufacturersListSchema = (state: RootState) => {
  return state.manufacturersList;
};

export const getManufacturersList =
  manufacturerListAdapter.getSelectors<RootState>(
    (state) =>
      state.manufacturersList ?? manufacturerListAdapter.getInitialState(),
  );

export const getManufacturersListIsLoading = createAppSelector(
  getManufacturersListSchema,
  (schema) => {
    return schema?.isLoading ?? false;
  },
);

export const getManufacturersListError = createAppSelector(
  getManufacturersListSchema,
  (schema) => {
    return schema?.error ?? "";
  },
);

export const getManufacturersListIsInitialized = createAppSelector(
  getManufacturersListSchema,
  (schema) => {
    return schema?._isInitialized ?? false;
  },
);
