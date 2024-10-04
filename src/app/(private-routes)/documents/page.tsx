"use client";
import { Flex, Typography } from "antd";
import { DocumentsList } from "@/features/DOCUMENTS/DocumentsList";
import { AddDocumentButton } from "@/features/DOCUMENTS/AddDocumentButton";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("?page=1");
  // }, []);

  return (
    <>
      <Flex vertical gap={16}>
        <Flex align={"center"} justify={"space-between"}>
          <Typography.Title type={"secondary"} level={4}>
            Документы
          </Typography.Title>
          <AddDocumentButton />
        </Flex>
        <DocumentsList />
      </Flex>
    </>
  );
};

export default DocumentsPage;
