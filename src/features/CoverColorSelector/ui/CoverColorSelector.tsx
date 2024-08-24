"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchCoverColorsListService } from "@/features/CoverColorSelector/model/services/fetchCoverColorsList/fetchCoverColorsListService";

import { CoverColor } from "@/entities/CoverColor";
import {
  getCoverColorsList,
  getCoverColorsListError,
  getCoverColorsListIsInitialized,
  getCoverColorsListIsLoading,
} from "@/features/CoverColorSelector";

export interface CoverColorSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const CoverColorSelector = memo((props: CoverColorSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const dispatch = useAppDispatch();
  const data = useAppSelector(getCoverColorsList.selectAll);
  const loading = useAppSelector(getCoverColorsListIsLoading);
  const error = useAppSelector(getCoverColorsListError);
  const isInitialized = useAppSelector(getCoverColorsListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchCoverColorsListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: CoverColor): SelectorOption => {
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
});
