"use client";
import { Alert, Flex, Typography } from "antd";
import { memo } from "react";

interface DashboardPageProps {}

const DashboardPage = memo((props: DashboardPageProps) => {
  return (
    <>
      <Flex vertical gap={16}>
        <Flex align={"center"} justify={"space-between"}>
          <Typography.Title type={"secondary"} level={4}>
            Статистика
          </Typography.Title>
        </Flex>
        <Alert
          message="Информация"
          description="Эта страница находится в разработке"
          type="info"
          showIcon
        />
      </Flex>
    </>
  );
});

export default DashboardPage;
