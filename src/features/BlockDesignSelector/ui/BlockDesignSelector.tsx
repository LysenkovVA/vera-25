"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchBlockDesignsListService } from "@/features/BlockDesignSelector/model/services/fetchBlockDesignsList/fetchBlockDesignsListService";

import { BlockDesign } from "@/entities/BlockDesign";
import {
  blockDesignsListReducer,
  getBlockDesignsList,
  getBlockDesignsListError,
  getBlockDesignsListIsInitialized,
  getBlockDesignsListIsLoading,
} from "@/features/BlockDesignSelector";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface BlockDesignSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const BlockDesignSelector = memo((props: BlockDesignSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const reducers: ReducersList = {
    blockDesignsList: blockDesignsListReducer,
  };

  const dispatch = useAppDispatch();
  const data = useAppSelector(getBlockDesignsList.selectAll);
  const loading = useAppSelector(getBlockDesignsListIsLoading);
  const error = useAppSelector(getBlockDesignsListError);
  const isInitialized = useAppSelector(getBlockDesignsListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchBlockDesignsListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: BlockDesign): SelectorOption => {
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
