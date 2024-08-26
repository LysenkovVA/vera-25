"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchFiberColorsListService } from "@/features/FiberColorSelector/model/services/fetchFiberColorsList/fetchFiberColorsListService";

import { FiberColor } from "@/entities/FiberColor";
import {
  getFiberColorsList,
  getFiberColorsListError,
  getFiberColorsListIsInitialized,
  getFiberColorsListIsLoading,
} from "@/features/FiberColorSelector";

export interface FiberColorSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const FiberColorSelector = memo((props: FiberColorSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const dispatch = useAppDispatch();
  const data = useAppSelector(getFiberColorsList.selectAll);
  const loading = useAppSelector(getFiberColorsListIsLoading);
  const error = useAppSelector(getFiberColorsListError);
  const isInitialized = useAppSelector(getFiberColorsListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchFiberColorsListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: FiberColor): SelectorOption => {
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
