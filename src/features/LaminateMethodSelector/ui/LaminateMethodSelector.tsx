"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchLaminateMethodsListService } from "@/features/LaminateMethodSelector/model/services/fetchLaminateMethodsList/fetchLaminateMethodsListService";

import { LaminateMethod } from "@/entities/LaminateMethod";
import {
  getLaminateMethodsList,
  getLaminateMethodsListError,
  getLaminateMethodsListIsInitialized,
  getLaminateMethodsListIsLoading,
  laminateMethodsListReducer,
} from "@/features/LaminateMethodSelector";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LaminateMethodSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const LaminateMethodSelector = memo(
  (props: LaminateMethodSelectorProps) => {
    const { placeholder, value, onChange } = props;

    const reducers: ReducersList = {
      laminateMethodsList: laminateMethodsListReducer,
    };

    const dispatch = useAppDispatch();
    const data = useAppSelector(getLaminateMethodsList.selectAll);
    const loading = useAppSelector(getLaminateMethodsListIsLoading);
    const error = useAppSelector(getLaminateMethodsListError);
    const isInitialized = useAppSelector(getLaminateMethodsListIsInitialized);

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(fetchLaminateMethodsListService({ replaceData: true }));
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map((value: LaminateMethod): SelectorOption => {
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
  },
);
