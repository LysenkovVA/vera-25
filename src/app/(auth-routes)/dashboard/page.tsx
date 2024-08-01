import { Flex } from "antd";
import DocumentsWidget from "@/components/widgets/DocumentsWidget";

const Page = async () => {
  return (
    <Flex align={"center"} justify={"center"} gap={16}>
      <DocumentsWidget />
    </Flex>
  );
};

export default Page;
