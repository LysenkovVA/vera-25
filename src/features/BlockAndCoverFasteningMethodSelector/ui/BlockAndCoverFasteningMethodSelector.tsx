"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchBlockAndCoverFasteningMethodsListService } from "@/features/BlockAndCoverFasteningMethodSelector/model/services/fetchBlockAndCoverFasteningMethodsList/fetchBlockAndCoverFasteningMethodsListService";

import { BlockAndCoverFasteningMethod } from "@/entities/BlockAndCoverFasteningMethod";
import {
  blockAndCoverFasteningMethodsListReducer,
  getBlockAndCoverFasteningMethodsList,
  getBlockAndCoverFasteningMethodsListError,
  getBlockAndCoverFasteningMethodsListIsInitialized,
  getBlockAndCoverFasteningMethodsListIsLoading,
} from "@/features/BlockAndCoverFasteningMethodSelector";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface BlockAndCoverFasteningMethodSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const BlockAndCoverFasteningMethodSelector = memo(
  (props: BlockAndCoverFasteningMethodSelectorProps) => {
    const { placeholder, value, onChange } = props;

    const reducers: ReducersList = {
      blockAndCoverFasteningMethodsList:
        blockAndCoverFasteningMethodsListReducer,
    };

    const dispatch = useAppDispatch();
    const data = useAppSelector(getBlockAndCoverFasteningMethodsList.selectAll);
    const loading = useAppSelector(
      getBlockAndCoverFasteningMethodsListIsLoading,
    );
    const error = useAppSelector(getBlockAndCoverFasteningMethodsListError);
    const isInitialized = useAppSelector(
      getBlockAndCoverFasteningMethodsListIsInitialized,
    );

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(
          fetchBlockAndCoverFasteningMethodsListService({ replaceData: true }),
        );
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map(
      (value: BlockAndCoverFasteningMethod): SelectorOption => {
        return { value: value.id!, label: <div>{value.name}</div> };
      },
    );

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
  },
);
