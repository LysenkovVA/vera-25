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
} from "@/features/ManufacturerSelector";
import { fetchManufacturersListService } from "../model/services/fetchManufacturersList/fetchManufacturersListService";

export interface ManufacturerSelectorProps {
  placeholder?: string;
  onSelectChange?: (id: string | undefined) => void;
}

export const ManufacturerSelector = memo((props: ManufacturerSelectorProps) => {
  const { placeholder, onSelectChange } = props;

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
    <>
      <Selector
        placeholder={placeholder}
        disabled={!!error}
        status={error ? "error" : undefined}
        options={opts}
        loading={loading}
        allowClear
        showSearch
        value={opts?.length === 1 ? opts[0].value : undefined}
        onChange={(value: any) => {
          onSelectChange?.(value?.toString());
        }}
      />
      {error && <Typography.Text>{error}</Typography.Text>}
    </>
  );
});
