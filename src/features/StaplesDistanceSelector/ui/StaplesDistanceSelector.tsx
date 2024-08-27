"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchStaplesDistancesListService } from "@/features/StaplesDistanceSelector/model/services/fetchStaplesDistancesList/fetchStaplesDistancesListService";

import { StaplesDistance } from "@/entities/StaplesDistance";
import {
  getStaplesDistancesList,
  getStaplesDistancesListError,
  getStaplesDistancesListIsInitialized,
  getStaplesDistancesListIsLoading,
} from "../model/selectors/staplesDistancesList.selectors";

export interface StaplesDistanceSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const StaplesDistanceSelector = memo(
  (props: StaplesDistanceSelectorProps) => {
    const { placeholder, value, onChange } = props;

    const dispatch = useAppDispatch();
    const data = useAppSelector(getStaplesDistancesList.selectAll);
    const loading = useAppSelector(getStaplesDistancesListIsLoading);
    const error = useAppSelector(getStaplesDistancesListError);
    const isInitialized = useAppSelector(getStaplesDistancesListIsInitialized);

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(fetchStaplesDistancesListService({ replaceData: true }));
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map((value: StaplesDistance): SelectorOption => {
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
