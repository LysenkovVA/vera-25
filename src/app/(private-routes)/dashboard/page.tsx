"use client";
import { Flex, Typography } from "antd";
import { memo } from "react";

interface DashboardPageProps {}

const DashboardPage = memo((props: DashboardPageProps) => {
  return (
    <Flex
      vertical
      align={"start"}
      justify={"center"}
      gap={16}
      style={{ width: "100%" }}
    >
      <Typography.Title>Статистика</Typography.Title>
    </Flex>
  );
});

export default DashboardPage;
