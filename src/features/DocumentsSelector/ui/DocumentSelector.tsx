"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import {
  documentsListReducer,
  getDocumentsList,
  getDocumentsListError,
  getDocumentsListIsInitialized,
  getDocumentsListIsLoading,
} from "@/features/DocumentsSelector";
import { Document } from "@/entities/Document";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchDocumentsListService } from "@/features/DocumentsSelector/model/services/fetchDocumentsList/fetchDocumentsListService";

export interface DocumentSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const DocumentSelector = memo((props: DocumentSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const reducers: ReducersList = {
    documentsList: documentsListReducer,
  };

  const dispatch = useAppDispatch();
  const data = useAppSelector(getDocumentsList.selectAll);
  const loading = useAppSelector(getDocumentsListIsLoading);
  const error = useAppSelector(getDocumentsListError);
  const isInitialized = useAppSelector(getDocumentsListIsInitialized);

  useEffect(() => {
    if (!isInitialized && !loading) {
      dispatch(fetchDocumentsListService({ replaceData: true }));
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
