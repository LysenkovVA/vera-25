"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchCountriesListService } from "@/features/CountrySelector/model/services/fetchCountriesList/fetchBlanksList.service";
import {
  getCountriesList,
  getCountriesListError,
  getCountriesListIsInitialized,
  getCountriesListIsLoading,
} from "@/features/CountrySelector";
import { Country } from "@/entities/Country";

export interface CountrySelectorProps {
  placeholder?: string;
  onSelectChange?: (id: string | undefined) => void;
}

export const CountrySelector = memo((props: CountrySelectorProps) => {
  const { placeholder, onSelectChange } = props;

  const dispatch = useAppDispatch();
  const data = useAppSelector(getCountriesList.selectAll);
  const loading = useAppSelector(getCountriesListIsLoading);
  const error = useAppSelector(getCountriesListError);
  const isInitialized = useAppSelector(getCountriesListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchCountriesListService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: Country): SelectorOption => {
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
        value={opts?.length === 1 ? opts[0].value : undefined}
        onChange={(value: any) => {
          onSelectChange?.(value?.toString());
        }}
      />
      {error && <Typography.Text>{error}</Typography.Text>}
    </>
  );
});
