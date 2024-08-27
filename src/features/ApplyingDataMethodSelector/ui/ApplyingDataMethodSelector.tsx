"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchApplyingDataMethodsListService } from "@/features/ApplyingDataMethodSelector/model/services/fetchApplyingDataMethodsList/fetchApplyingDataMethodsListService";

import { ApplyingDataMethod } from "@/entities/ApplyingDataMethod";
import {
  getApplyingDataMethodsList,
  getApplyingDataMethodsListError,
  getApplyingDataMethodsListIsInitialized,
  getApplyingDataMethodsListIsLoading,
} from "@/features/ApplyingDataMethodSelector";

export interface ApplyingDataMethodSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const ApplyingDataMethodSelector = memo(
  (props: ApplyingDataMethodSelectorProps) => {
    const { placeholder, value, onChange } = props;

    const dispatch = useAppDispatch();
    const data = useAppSelector(getApplyingDataMethodsList.selectAll);
    const loading = useAppSelector(getApplyingDataMethodsListIsLoading);
    const error = useAppSelector(getApplyingDataMethodsListError);
    const isInitialized = useAppSelector(
      getApplyingDataMethodsListIsInitialized,
    );

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(fetchApplyingDataMethodsListService({ replaceData: true }));
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map((value: ApplyingDataMethod): SelectorOption => {
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
  },
);
