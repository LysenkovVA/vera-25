"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchDetailTypesListService } from "@/features/DetailTypeSelector/model/services/fetchDetailTypesList/fetchDetailTypesListService";

import { DetailType } from "@/entities/DetailType";
import {
  getDetailTypesList,
  getDetailTypesListError,
  getDetailTypesListIsInitialized,
  getDetailTypesListIsLoading,
} from "@/features/DetailTypeSelector";

export interface DetailTypeSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const DetailTypeSelector = memo((props: DetailTypeSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const dispatch = useAppDispatch();
  const data = useAppSelector(getDetailTypesList.selectAll);
  const loading = useAppSelector(getDetailTypesListIsLoading);
  const error = useAppSelector(getDetailTypesListError);
  const isInitialized = useAppSelector(getDetailTypesListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchDetailTypesListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: DetailType): SelectorOption => {
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
        value={value}
        onChange={(value: any) => {
          onChange?.(value);
        }}
      />
      {error && <Typography.Text>{error}</Typography.Text>}
    </>
  );
});
