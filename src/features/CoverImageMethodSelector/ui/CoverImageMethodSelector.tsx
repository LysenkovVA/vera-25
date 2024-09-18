"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchCoverImageMethodsListService } from "@/features/CoverImageMethodSelector/model/services/fetchCoverImageMethodsList/fetchCoverImageMethodsListService";

import { CoverImageMethod } from "@/entities/CoverImageMethod";
import {
  coverImageMethodsListReducer,
  getCoverImageMethodsList,
  getCoverImageMethodsListError,
  getCoverImageMethodsListIsInitialized,
  getCoverImageMethodsListIsLoading,
} from "@/features/CoverImageMethodSelector";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface CoverImageMethodSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const CoverImageMethodSelector = memo(
  (props: CoverImageMethodSelectorProps) => {
    const { placeholder, value, onChange } = props;

    const reducers: ReducersList = {
      coverImageMethodsList: coverImageMethodsListReducer,
    };

    const dispatch = useAppDispatch();
    const data = useAppSelector(getCoverImageMethodsList.selectAll);
    const loading = useAppSelector(getCoverImageMethodsListIsLoading);
    const error = useAppSelector(getCoverImageMethodsListError);
    const isInitialized = useAppSelector(getCoverImageMethodsListIsInitialized);

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(fetchCoverImageMethodsListService({ replaceData: true }));
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map((value: CoverImageMethod): SelectorOption => {
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
