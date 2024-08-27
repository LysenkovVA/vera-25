"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchStaplesBackSizesListService } from "@/features/StaplesBackSizeSelector/model/services/fetchStaplesBackSizesList/fetchStaplesBackSizesListService";

import { StaplesBackSize } from "@/entities/StaplesBackSize";
import {
  getStaplesBackSizesList,
  getStaplesBackSizesListError,
  getStaplesBackSizesListIsInitialized,
  getStaplesBackSizesListIsLoading,
} from "../model/selectors/staplesBackSizesList.selectors";

export interface StaplesBackSizeSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const StaplesBackSizeSelector = memo(
  (props: StaplesBackSizeSelectorProps) => {
    const { placeholder, value, onChange } = props;

    const dispatch = useAppDispatch();
    const data = useAppSelector(getStaplesBackSizesList.selectAll);
    const loading = useAppSelector(getStaplesBackSizesListIsLoading);
    const error = useAppSelector(getStaplesBackSizesListError);
    const isInitialized = useAppSelector(getStaplesBackSizesListIsInitialized);

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(fetchStaplesBackSizesListService({ replaceData: true }));
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map((value: StaplesBackSize): SelectorOption => {
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
