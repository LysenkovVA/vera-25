"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchFiberMorphologiesListService } from "@/features/FiberMorphologySelector/model/services/fetchFiberMorphologiesList/fetchFiberMorphologiesListService";

import { FiberMorphology } from "@/entities/FiberMorphology";
import {
  getFiberMorphologiesList,
  getFiberMorphologiesListError,
  getFiberMorphologiesListIsInitialized,
  getFiberMorphologiesListIsLoading,
} from "@/features/FiberMorphologySelector";

export interface FiberMorphologySelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const FiberMorphologySelector = memo(
  (props: FiberMorphologySelectorProps) => {
    const { placeholder, value, onChange } = props;

    const dispatch = useAppDispatch();
    const data = useAppSelector(getFiberMorphologiesList.selectAll);
    const loading = useAppSelector(getFiberMorphologiesListIsLoading);
    const error = useAppSelector(getFiberMorphologiesListError);
    const isInitialized = useAppSelector(getFiberMorphologiesListIsInitialized);

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(fetchFiberMorphologiesListService({ replaceData: true }));
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map((value: FiberMorphology): SelectorOption => {
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
