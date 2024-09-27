"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import {
  documentsListSelectorReducer,
  getDocumentsListSelector,
  getDocumentsListSelectorError,
  getDocumentsListSelectorIsInitialized,
  getDocumentsListSelectorIsLoading,
} from "@/features/DOCUMENTS/DocumentsSelector";
import { Document } from "@/entities/Document";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchDocumentsListSelectorService } from "@/features/DOCUMENTS/DocumentsSelector/model/services/fetchDocumentsListSelectorService/fetchDocumentsListSelectorService";

export interface DocumentSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const DocumentSelector = memo((props: DocumentSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const reducers: ReducersList = {
    documentsListSelector: documentsListSelectorReducer,
  };

  const dispatch = useAppDispatch();
  const data = useAppSelector(getDocumentsListSelector.selectAll);
  const loading = useAppSelector(getDocumentsListSelectorIsLoading);
  const error = useAppSelector(getDocumentsListSelectorError);
  const isInitialized = useAppSelector(getDocumentsListSelectorIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchDocumentsListSelectorService({ replaceData: true }));
    }
  }, [isInitialized, dispatch, loading, data]);

  const opts = data.map((value: Document): SelectorOption => {
    return {
      value: value.id!,
      label: <div>{`${value.number}`}</div>,
    };
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
