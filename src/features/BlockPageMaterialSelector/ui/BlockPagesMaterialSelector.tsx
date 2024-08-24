"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchBlockPagesMaterialsListService } from "../model/services/fetchBlockPagesMaterialsList/fetchBlockPagesMaterialsListService";

import { BlockPagesMaterial } from "@/entities/BlockPagesMaterial";
import {
  getBlockPagesMaterialsList,
  getBlockPagesMaterialsListError,
  getBlockPagesMaterialsListIsInitialized,
  getBlockPagesMaterialsListIsLoading,
} from "../model/selectors/blockPagesMaterialsList.selectors";

export interface BlockPagesMaterialSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const BlockPagesMaterialSelector = memo(
  (props: BlockPagesMaterialSelectorProps) => {
    const { placeholder, value, onChange } = props;

    const dispatch = useAppDispatch();
    const data = useAppSelector(getBlockPagesMaterialsList.selectAll);
    const loading = useAppSelector(getBlockPagesMaterialsListIsLoading);
    const error = useAppSelector(getBlockPagesMaterialsListError);
    const isInitialized = useAppSelector(
      getBlockPagesMaterialsListIsInitialized,
    );

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(fetchBlockPagesMaterialsListService({ replaceData: true }));
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map((value: BlockPagesMaterial): SelectorOption => {
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
