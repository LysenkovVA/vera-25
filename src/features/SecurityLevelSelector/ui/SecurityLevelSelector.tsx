"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
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
}

export const SecurityLevelSelector = memo(
  (props: SecurityLevelSelectorProps) => {
    const { placeholder } = props;

    const dispatch = useAppDispatch();
    const data = useSelector(getSecurityLevelsList.selectAll);
    const loading = useSelector(getSecurityLevelsListIsLoading);
    const error = useSelector(getSecurityLevelsListError);
    const isInitialized = useSelector(getSecurityLevelsListIsInitialized);

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
        />
        {error && <Typography.Text>{error}</Typography.Text>}
      </>
    );
  },
);
