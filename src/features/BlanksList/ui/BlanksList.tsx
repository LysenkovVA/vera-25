"use client";

import { BlankItem } from "@/entities/Blank";
import { memo, useCallback, useEffect, useState } from "react";
import { Flex, List, Typography } from "antd";
import { SearchBar } from "@/shared/UI/SearchBar";
import { useSelector } from "react-redux";
import {
  getBlanksList,
  getBlanksListIsInitialized,
  getBlanksListIsLoading,
  getBlanksListSearch,
  getBlanksListTake,
  getBlanksListTotalCount,
} from "@/features/BlanksList/model/selectors/blanksList.selectors";
import { fetchBlanksListService } from "@/features/BlanksList/model/services/fetchBlanksList/fetchBlanksList.service";
import { blanksListActions } from "@/features/BlanksList/model/slice/blanksList.slice";
import { useAppDispatch } from "@/shared/lib/hooks/storeHooks";

export interface BlanksListProps {}

const BlanksList = memo((props: BlanksListProps) => {
  const dispatch = useAppDispatch();
  const blanksList = useSelector(getBlanksList.selectAll);
  const isLoading = useSelector(getBlanksListIsLoading);
  const totalCount = useSelector(getBlanksListTotalCount);
  const take = useSelector(getBlanksListTake);
  const search = useSelector(getBlanksListSearch);
  const isInitialized = useSelector(getBlanksListIsInitialized);

  const [current, setCurrent] = useState(1);

  const loadData = useCallback(() => {
    if (isLoading || isInitialized) {
      return;
    }

    dispatch(fetchBlanksListService({ replaceData: true }));
  }, [dispatch, isInitialized, isLoading]);

  useEffect(() => {
    if (!isInitialized) {
      loadData();
    }
  }, [isInitialized, loadData]);

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(blanksListActions.setSearchQuery(value));
    },
    [dispatch],
  );

  return (
    <Flex vertical gap={16}>
      <Typography.Title>Коллекция</Typography.Title>
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
  );
});

export default BlanksList;
