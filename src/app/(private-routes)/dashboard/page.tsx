import { Flex } from "antd";
import { memo } from "react";

interface DashboardPageProps {}

// TODO мемо норм?
const DashboardPage = memo((props: DashboardPageProps) => {
  return (
    <Flex
      vertical
      align={"center"}
      justify={"center"}
      gap={16}
      style={{ width: "100%" }}
    >
      <div>Панель управления</div>
      {/*<SecurityLevelSelector />*/}
    </Flex>
  );
});

export default DashboardPage;
