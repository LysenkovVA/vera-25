"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchCoverDesignsListService } from "../model/services/fetchCoverDesignsList/fetchCoverDesignsListService";

import { CoverDesign } from "@/entities/CoverDesign";
import {
  coverDesignsListReducer,
  getCoverDesignsList,
  getCoverDesignsListError,
  getCoverDesignsListIsInitialized,
  getCoverDesignsListIsLoading,
} from "@/features/CoverDesignSelector";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface CoverDesignSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const CoverDesignSelector = memo((props: CoverDesignSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const reducers: ReducersList = {
    coverDesignsList: coverDesignsListReducer,
  };

  const dispatch = useAppDispatch();
  const data = useAppSelector(getCoverDesignsList.selectAll);
  const loading = useAppSelector(getCoverDesignsListIsLoading);
  const error = useAppSelector(getCoverDesignsListError);
  const isInitialized = useAppSelector(getCoverDesignsListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchCoverDesignsListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: CoverDesign): SelectorOption => {
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
