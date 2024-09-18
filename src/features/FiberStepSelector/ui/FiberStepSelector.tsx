"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchFiberStepsListService } from "@/features/FiberStepSelector/model/services/fetchFiberStepsList/fetchFiberStepsListService";

import { FiberStep } from "@/entities/FiberStep";
import {
  fiberStepsListReducer,
  getFiberStepsList,
  getFiberStepsListError,
  getFiberStepsListIsInitialized,
  getFiberStepsListIsLoading,
} from "@/features/FiberStepSelector";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface FiberStepSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const FiberStepSelector = memo((props: FiberStepSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const reducers: ReducersList = {
    fiberStepsList: fiberStepsListReducer,
  };

  const dispatch = useAppDispatch();
  const data = useAppSelector(getFiberStepsList.selectAll);
  const loading = useAppSelector(getFiberStepsListIsLoading);
  const error = useAppSelector(getFiberStepsListError);
  const isInitialized = useAppSelector(getFiberStepsListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchFiberStepsListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: FiberStep): SelectorOption => {
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
