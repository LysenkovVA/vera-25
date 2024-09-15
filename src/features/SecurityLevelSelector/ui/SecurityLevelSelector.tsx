"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import {
  getSecurityLevelsList,
  getSecurityLevelsListError,
  getSecurityLevelsListIsInitialized,
  getSecurityLevelsListIsLoading,
  securityLevelsListReducer,
} from "@/features/SecurityLevelSelector";
import { Typography } from "antd";
import { fetchSecurityLevelsListService } from "../model/services/fetchSecurityLevelsList/fetchBlanksList.service";
import { SecurityLevel } from "@/entities/SecurityLevel";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface SecurityLevelSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const SecurityLevelSelector = memo(
  (props: SecurityLevelSelectorProps) => {
    const reducers: ReducersList = {
      securityLevelsList: securityLevelsListReducer,
    };

    const { placeholder, value, onChange } = props;

    const dispatch = useAppDispatch();
    const data = useAppSelector(getSecurityLevelsList.selectAll);
    const loading = useAppSelector(getSecurityLevelsListIsLoading);
    const error = useAppSelector(getSecurityLevelsListError);
    const isInitialized = useAppSelector(getSecurityLevelsListIsInitialized);

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(fetchSecurityLevelsListService({ replaceData: true }));
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map((value: SecurityLevel): SelectorOption => {
      return { value: value.id!, label: <div>{value.name}</div> };
    });

    return (
      /**
       * TODO: Эта логика должна быть изменена в случае одновременной работы нескольких пользователей
       * Загружаем по мере надобности
       */
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
        <Selector
          placeholder={placeholder}
          disabled={!isInitialized || loading || !!error}
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
