"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";

import { ControlParameterValue } from "@/entities/ControlParameterValue";
import {
  getControlParameterValuesList,
  getControlParameterValuesListError,
  getControlParameterValuesListIsInitialized,
  getControlParameterValuesListIsLoading,
} from "../model/selectors/controlParameterValuesList.selectors";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { controlParameterValuesListReducer } from "@/entities/ControlParameterValue/model/slice/controlParameterValuesListSlice";
import { fetchControlParameterValuesListByControlParameterIdService } from "@/entities/ControlParameterValue/model/services/fetchControlParameterValuesListByControlParameterId/fetchControlParameterValuesListByControlParameterIdService";

export interface ControlParameterValueSelectorProps {
  controlParameterId: string;
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const ControlParameterValueSelector = memo(
  (props: ControlParameterValueSelectorProps) => {
    const { placeholder, value, onChange, controlParameterId } = props;

    const reducers: ReducersList = {
      controlParameterValuesList: controlParameterValuesListReducer,
    };

    const dispatch = useAppDispatch();
    const data = useAppSelector(getControlParameterValuesList.selectAll);
    const loading = useAppSelector(getControlParameterValuesListIsLoading);
    const error = useAppSelector(getControlParameterValuesListError);
    const isInitialized = useAppSelector(
      getControlParameterValuesListIsInitialized,
    );

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(
          fetchControlParameterValuesListByControlParameterIdService({
            replaceData: true,
            controlParameterId,
          }),
        );
      }
    }, [isInitialized, dispatch, loading, data, controlParameterId]);

    const opts = data.map((value: ControlParameterValue): SelectorOption => {
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
