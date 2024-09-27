"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import { Flex, List } from "antd";
import {
  documentsListActions,
  documentsListReducer,
} from "@/features/DOCUMENTS/DocumentsList/model/slice/documentsListSlice";
import {
  getDocumentsList,
  getDocumentsListIsInitialized,
  getDocumentsListIsLoading,
  getDocumentsListSearch,
  getDocumentsListTake,
  getDocumentsListTotalCount,
} from "@/features/DOCUMENTS/DocumentsList/model/selectors/documentsList.selectors";
import { fetchDocumentsListService } from "@/features/DOCUMENTS/DocumentsList/model/services/fetchDocumentsList/fetchDocumentsListService";
import { DocumentItem } from "@/entities/Document";

const DocumentsList = () => {
  const reducers: ReducersList = {
    documentsList: documentsListReducer,
  };

  const dispatch = useAppDispatch();
  const documentsList = useAppSelector(getDocumentsList.selectAll);
  const isLoading = useAppSelector(getDocumentsListIsLoading);
  const totalCount = useAppSelector(getDocumentsListTotalCount);
  const take = useAppSelector(getDocumentsListTake);
  const search = useAppSelector(getDocumentsListSearch);
  const isInitialized = useAppSelector(getDocumentsListIsInitialized);

  const [current, setCurrent] = useState(1);

  const loadData = useCallback(() => {
    if (isLoading || isInitialized) {
      return;
    }

    dispatch(fetchDocumentsListService({ replaceData: true }));
  }, [dispatch, isInitialized, isLoading]);

  useEffect(() => {
    loadData();
  }, []);

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(documentsListActions.setSearchQuery(value));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Flex vertical gap={16}>
        <List
          pagination={{
            position: "bottom",
            align: "center",
            pageSize: take,
            total: totalCount,
            current,
            onChange: (newPage) => {
              dispatch(documentsListActions.setSkip((newPage - 1) * take));
              setCurrent(newPage);
            },
            showTotal: (total) => <div>{`Всего: ${totalCount}`}</div>,
          }}
          loading={isLoading}
          dataSource={documentsList}
          style={{}}
          grid={{ gutter: [4, 4], column: 3 }}
          renderItem={(item) => (
            <List.Item>
              <DocumentItem document={item} />
            </List.Item>
          )}
        />
      </Flex>
    </DynamicModuleLoader>
  );
};

export default DocumentsList;
