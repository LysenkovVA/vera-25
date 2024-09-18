"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchStaplesMaterialsListService } from "@/features/StaplesMaterialSelector/model/services/fetchStaplesMaterialsList/fetchStaplesMaterialsListService";

import { StaplesMaterial } from "@/entities/StaplesMaterial";
import {
  getStaplesMaterialsList,
  getStaplesMaterialsListError,
  getStaplesMaterialsListIsInitialized,
  getStaplesMaterialsListIsLoading,
} from "../model/selectors/staplesMaterialsList.selectors";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { staplesMaterialsListReducer } from "@/features/StaplesMaterialSelector";

export interface StaplesMaterialSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const StaplesMaterialSelector = memo(
  (props: StaplesMaterialSelectorProps) => {
    const { placeholder, value, onChange } = props;

    const reducers: ReducersList = {
      staplesMaterialsList: staplesMaterialsListReducer,
    };

    const dispatch = useAppDispatch();
    const data = useAppSelector(getStaplesMaterialsList.selectAll);
    const loading = useAppSelector(getStaplesMaterialsListIsLoading);
    const error = useAppSelector(getStaplesMaterialsListError);
    const isInitialized = useAppSelector(getStaplesMaterialsListIsInitialized);

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(fetchStaplesMaterialsListService({ replaceData: true }));
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map((value: StaplesMaterial): SelectorOption => {
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
