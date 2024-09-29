"use client";

import { BlankItem } from "@/entities/Blank";
import { memo, useCallback, useEffect, useState } from "react";
import { Flex, List, Typography } from "antd";
import { SearchBar } from "@/shared/UI/SearchBar";
import {
  getBlanksList,
  getBlanksListIsInitialized,
  getBlanksListIsLoading,
  getBlanksListSearch,
  getBlanksListTake,
  getBlanksListTotalCount,
} from "@/features/BLANKS/BlanksList/model/selectors/blanksList.selectors";
import { fetchBlanksListService } from "@/features/BLANKS/BlanksList/model/services/fetchBlanksList/fetchBlanksList.service";
import {
  blanksListActions,
  blanksListReducer,
} from "@/features/BLANKS/BlanksList/model/slice/blanksList.slice";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { NewBlankButton } from "@/features/BLANKS/NewBlankButton";

export interface BlanksListProps {}

const BlanksList = memo((props: BlanksListProps) => {
  const reducers: ReducersList = {
    blanksList: blanksListReducer,
  };

  const dispatch = useAppDispatch();
  const blanksList = useAppSelector(getBlanksList.selectAll);
  const isLoading = useAppSelector(getBlanksListIsLoading);
  const totalCount = useAppSelector(getBlanksListTotalCount);
  const take = useAppSelector(getBlanksListTake);
  const search = useAppSelector(getBlanksListSearch);
  const isInitialized = useAppSelector(getBlanksListIsInitialized);

  const [current, setCurrent] = useState(1);

  const loadData = useCallback(() => {
    if (isLoading) {
      return;
    }

    dispatch(fetchBlanksListService({ replaceData: true }));
  }, [dispatch, isLoading]);

  useEffect(() => {
    loadData();
  }, []);

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(blanksListActions.setSearchQuery(value));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Flex vertical gap={16}>
        <Flex align={"center"} justify={"space-between"}>
          <Typography.Title type={"secondary"} level={4}>
            Бланки
          </Typography.Title>
          <NewBlankButton />
        </Flex>

        <SearchBar value={search} onChange={onChangeSearch} />
        <List
          pagination={{
            position: "bottom",
            align: "center",
            pageSize: take,
            total: totalCount,
            current,
            onChange: (newPage) => {
              dispatch(blanksListActions.setSkip((newPage - 1) * take));
              setCurrent(newPage);
              loadData();
            },
            showTotal: (total) => <div>{`Всего: ${totalCount}`}</div>,
          }}
          loading={isLoading}
          dataSource={blanksList}
          style={{}}
          grid={{ gutter: [4, 4], column: 3 }}
          renderItem={(item) => (
            <List.Item>
              <BlankItem blank={item} />
            </List.Item>
          )}
        />
      </Flex>
    </DynamicModuleLoader>
  );
});

export default BlanksList;
