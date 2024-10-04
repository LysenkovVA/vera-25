"use client";
import React, { useCallback, useEffect } from "react";
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
  getDocumentsListPage,
  getDocumentsListSearch,
  getDocumentsListTake,
  getDocumentsListTotalCount,
} from "@/features/DOCUMENTS/DocumentsList/model/selectors/documentsList.selectors";
import { fetchDocumentsListService } from "@/features/DOCUMENTS/DocumentsList/model/services/fetchDocumentsList/fetchDocumentsListService";
import { DocumentItem } from "@/entities/Document";
import { useSearchParams } from "next/navigation";
import { initializeDocumentsListService } from "@/features/DOCUMENTS/DocumentsList/model/services/initializeDocumentsList/initializeDocumentsList.service";

const DocumentsList = () => {
  const reducers: ReducersList = {
    documentsList: documentsListReducer,
  };

  const searchParams = useSearchParams();

  const dispatch = useAppDispatch();
  const documentsList = useAppSelector(getDocumentsList.selectAll);
  const isLoading = useAppSelector(getDocumentsListIsLoading);
  const totalCount = useAppSelector(getDocumentsListTotalCount);
  const take = useAppSelector(getDocumentsListTake);
  const page = useAppSelector(getDocumentsListPage);
  const search = useAppSelector(getDocumentsListSearch);
  const isInitialized = useAppSelector(getDocumentsListIsInitialized);

  const loadData = useCallback(() => {
    if (isLoading) {
      return;
    }

    dispatch(fetchDocumentsListService({ replaceData: true }));
  }, [dispatch, isLoading]);

  useEffect(() => {
    dispatch(initializeDocumentsListService(searchParams));
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Flex vertical gap={16}>
        <List
          pagination={{
            position: "bottom",
            align: "center",
            pageSize: take,
            total: totalCount,
            current: page,
            onChange: (newPage) => {
              dispatch(documentsListActions.setPage(newPage));
              loadData();
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
