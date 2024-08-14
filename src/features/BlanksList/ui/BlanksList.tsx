"use client";

import { BlankDto, BlankItem } from "@/entities/Blank";
import { memo, useCallback, useEffect, useState } from "react";
import LoadingIndicator from "@/shared/UI/LoadingIndicator";
import { fetchBlanksAction } from "@/app/api/blanks/fetchBlanks.action";
import { Divider, List } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./BlanksList.module.scss";

export interface BlanksListProps {}

const BlanksList = memo((props: BlanksListProps) => {
  const [loading, setLoading] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<BlankDto[]>([]);

  const [skip, setSkip] = useState(0);
  const take = 10;
  const [hasMore, setHasMore] = useState(true);

  const loadNextPart = useCallback(() => {
    if (hasMore) {
      if (loading) {
        return;
      }
      setLoading(true);
      fetchBlanksAction(skip, take)
        .then((newData) => {
          setData([...data, ...newData]);
          setSkip(skip + newData.length);
          if (!newData || newData.length < take) {
            setHasMore(false);
          }
        })
        .finally(() => {
          // setIsLoaded(true);
          setLoading(false);
        });
    }
  }, [data, hasMore, loading, skip]);

  // Один раз запускаем
  useEffect(() => {
    loadNextPart();
  }, []);

  return (
    <div id="scrollableDiv" className={styles.Container}>
      <InfiniteScroll
        dataLength={data.length}
        next={loadNextPart}
        hasMore={hasMore}
        loader={<LoadingIndicator />}
        endMessage={<Divider plain>Это все, что есть... 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          // grid={{ gutter: [0, 4], column: 4 }}
          renderItem={(item) => <BlankItem blank={item} />}
        />
      </InfiniteScroll>
    </div>
  );
});

export default BlanksList;
