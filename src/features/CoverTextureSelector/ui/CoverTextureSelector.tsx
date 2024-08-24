"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchCoverTexturesListService } from "@/features/CoverTextureSelector/model/services/fetchCoverTexturesList/fetchCoverTexturesListService";

import { CoverTexture } from "@/entities/CoverTexture";
import {
  getCoverTexturesList,
  getCoverTexturesListError,
  getCoverTexturesListIsInitialized,
  getCoverTexturesListIsLoading,
} from "@/features/CoverTextureSelector";

export interface CoverTextureSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const CoverTextureSelector = memo((props: CoverTextureSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const dispatch = useAppDispatch();
  const data = useAppSelector(getCoverTexturesList.selectAll);
  const loading = useAppSelector(getCoverTexturesListIsLoading);
  const error = useAppSelector(getCoverTexturesListError);
  const isInitialized = useAppSelector(getCoverTexturesListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchCoverTexturesListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: CoverTexture): SelectorOption => {
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
