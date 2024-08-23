"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import {
  getSecurityLevelsList,
  getSecurityLevelsListError,
  getSecurityLevelsListIsInitialized,
  getSecurityLevelsListIsLoading,
} from "@/features/SecurityLevelSelector";
import { Typography } from "antd";
import { fetchSecurityLevelsListService } from "../model/services/fetchSecurityLevelsList/fetchBlanksList.service";
import { SecurityLevel } from "@/entities/SecurityLevel";

export interface SecurityLevelSelectorProps {
  placeholder?: string;
  onSelectChange?: (id: string | undefined) => void;
}

export const SecurityLevelSelector = memo(
  (props: SecurityLevelSelectorProps) => {
    const { placeholder, onSelectChange } = props;

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
      <>
        <Selector
          placeholder={placeholder}
          disabled={!!error}
          status={error ? "error" : undefined}
          options={opts}
          loading={loading}
          allowClear
          showSearch
          onChange={(value: any) => {
            onSelectChange?.(value?.toString());
          }}
        />
        {error && <Typography.Text>{error}</Typography.Text>}
      </>
    );
  },
);
