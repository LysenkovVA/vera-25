import { Flex } from "antd";
import { SecurityLevelSelector } from "@/entities/SecurityLevel";

const Page = async () => {
  return (
    <Flex
      vertical
      align={"center"}
      justify={"center"}
      gap={16}
      style={{ width: "100%" }}
    >
      <div>Dashboard</div>
      <SecurityLevelSelector />
    </Flex>
  );
};

export default Page;
