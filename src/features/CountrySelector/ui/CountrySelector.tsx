"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { fetchCountriesListService } from "@/features/CountrySelector/model/services/fetchCountriesList/fetchBlanksList.service";
import {
  countriesListReducer,
  getCountriesList,
  getCountriesListError,
  getCountriesListIsInitialized,
  getCountriesListIsLoading,
} from "@/features/CountrySelector";
import { Country } from "@/entities/Country";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface CountrySelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const CountrySelector = memo((props: CountrySelectorProps) => {
  const { placeholder, value, onChange } = props;

  const reducers: ReducersList = {
    countriesList: countriesListReducer,
  };

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
});
