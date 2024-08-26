"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchBlockPagesFasteningMethodsListService } from "@/features/BlockPagesFasteningMethodSelector/model/services/fetchBlockPagesFasteningMethodsList/fetchBlockPagesFasteningMethodsListService";

import { BlockPagesFasteningMethod } from "@/entities/BlockPagesFasteningMethod";
import {
  getBlockPagesFasteningMethodsList,
  getBlockPagesFasteningMethodsListError,
  getBlockPagesFasteningMethodsListIsInitialized,
  getBlockPagesFasteningMethodsListIsLoading,
} from "@/features/BlockPagesFasteningMethodSelector";

export interface BlockPagesFasteningMethodSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const BlockPagesFasteningMethodSelector = memo(
  (props: BlockPagesFasteningMethodSelectorProps) => {
    const { placeholder, value, onChange } = props;

    const dispatch = useAppDispatch();
    const data = useAppSelector(getBlockPagesFasteningMethodsList.selectAll);
    const loading = useAppSelector(getBlockPagesFasteningMethodsListIsLoading);
    const error = useAppSelector(getBlockPagesFasteningMethodsListError);
    const isInitialized = useAppSelector(
      getBlockPagesFasteningMethodsListIsInitialized,
    );

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(
          fetchBlockPagesFasteningMethodsListService({ replaceData: true }),
        );
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map(
      (value: BlockPagesFasteningMethod): SelectorOption => {
        return { value: value.id!, label: <div>{value.name}</div> };
      },
    );

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
