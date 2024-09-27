"use client";
import { Flex, Typography } from "antd";
import { DocumentsList } from "@/features/DOCUMENTS/DocumentsList";
import { AddDocumentButton } from "@/features/DOCUMENTS/AddDocumentButton";

const DocumentsPage = () => {
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
        {/*<Alert*/}
        {/*  message="Информация"*/}
        {/*  description="Эта страница находится в разработке"*/}
        {/*  type="info"*/}
        {/*  showIcon*/}
        {/*/>*/}
      </Flex>
    </>
  );
};

export default DocumentsPage;
