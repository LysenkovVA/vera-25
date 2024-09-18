"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchLaminateTypesListService } from "@/features/LaminateTypeSelector/model/services/fetchLaminateTypesList/fetchLaminateTypesListService";

import { LaminateType } from "@/entities/LaminateType";
import {
  getLaminateTypesList,
  getLaminateTypesListError,
  getLaminateTypesListIsInitialized,
  getLaminateTypesListIsLoading,
  laminateTypesListReducer,
} from "@/features/LaminateTypeSelector";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LaminateTypeSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const LaminateTypeSelector = memo((props: LaminateTypeSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const reducers: ReducersList = {
    laminateTypesList: laminateTypesListReducer,
  };

  const dispatch = useAppDispatch();
  const data = useAppSelector(getLaminateTypesList.selectAll);
  const loading = useAppSelector(getLaminateTypesListIsLoading);
  const error = useAppSelector(getLaminateTypesListError);
  const isInitialized = useAppSelector(getLaminateTypesListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchLaminateTypesListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: LaminateType): SelectorOption => {
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
