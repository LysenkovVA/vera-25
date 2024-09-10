"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchBlankTypesListService } from "@/features/BlankTypeSelector/model/services/fetchBlankTypesList/fetchBlankTypesListService";

import { BlankType } from "@/entities/BlankType";
import {
  getBlankTypesList,
  getBlankTypesListError,
  getBlankTypesListIsInitialized,
  getBlankTypesListIsLoading,
} from "@/features/BlankTypeSelector";

export interface BlankTypeSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const BlankTypeSelector = memo((props: BlankTypeSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const dispatch = useAppDispatch();
  const data = useAppSelector(getBlankTypesList.selectAll);
  const loading = useAppSelector(getBlankTypesListIsLoading);
  const error = useAppSelector(getBlankTypesListError);
  const isInitialized = useAppSelector(getBlankTypesListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchBlankTypesListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: BlankType): SelectorOption => {
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
