"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";

import { Manufacturer } from "@/entities/Manufacturer";
import {
  getManufacturersList,
  getManufacturersListError,
  getManufacturersListIsInitialized,
  getManufacturersListIsLoading,
  manufacturersListReducer,
} from "@/features/ManufacturerSelector";
import { fetchManufacturersListService } from "../model/services/fetchManufacturersList/fetchManufacturersListService";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface ManufacturerSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const ManufacturerSelector = memo((props: ManufacturerSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const reducers: ReducersList = {
    manufacturersList: manufacturersListReducer,
  };

  const dispatch = useAppDispatch();
  const data = useAppSelector(getManufacturersList.selectAll);
  const loading = useAppSelector(getManufacturersListIsLoading);
  const error = useAppSelector(getManufacturersListError);
  const isInitialized = useAppSelector(getManufacturersListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchManufacturersListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: Manufacturer): SelectorOption => {
    return { value: value.id!, label: <div>{value.name}</div> };
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Selector
        placeholder={placeholder}
        disabled={!!error}
        status={error ? "error" : undefined}
        options={opts}
        loading={loading}
        allowClear
        showSearch
        value={value}
        onChange={(value: any) => {
          onChange?.(value);
        }}
      />
      {error && <Typography.Text>{error}</Typography.Text>}
    </DynamicModuleLoader>
  );
});
