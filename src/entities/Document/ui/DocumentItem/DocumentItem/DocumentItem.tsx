"use client";

import { memo } from "react";
import { Document } from "@/entities/Document";
import { Card, Flex, Space, Typography } from "antd";
import dayjs from "dayjs";
import { AlertOutlined } from "@ant-design/icons";
import DocumentItemStatus from "@/entities/Document/ui/DocumentItem/DocumentItemStatus/DocumentItemStatus";
import { EditDocumentButton } from "@/features/DOCUMENTS/EditDocumentButton";

export interface DocumentItemProps {
  document: Document;
  onClick?: (id: string) => void;
}

const DocumentItem = memo((props: DocumentItemProps) => {
  const { document, onClick } = props;

  const titleContent = (
    <Flex gap={4} justify={"center"} align={"center"}>
      <DocumentItemStatus document={document} />
    </Flex>
  );

  return (
    <Card
      title={titleContent}
      size={"small"}
      styles={{
        title: { margin: 0, padding: 0 },
        body: { width: "100%", margin: 0, minHeight: 200 },
      }}
      actions={[
        <Space key={"controlParameters"} size={"small"}>
          <AlertOutlined />
          <Typography.Text
            type={
              (document.controlParameters?.length ?? 0) > 0
                ? "secondary"
                : "danger"
            }
          >
            {document.controlParameters?.length ?? 0}
          </Typography.Text>
        </Space>,
        <EditDocumentButton key={"edit"} documentId={document.id} />,
      ]}
    >
      <Flex vertical align={"center"} justify={"center"}>
        <Typography.Text
          style={{
            fontSize: 16,
            textAlign: "center",
            paddingBottom: 16,
            color: "cadetblue",
          }}
        >
          {`№ ${document.number ?? "-"} от ${document.date ? dayjs(document.date).format("DD.MM.YYYY") : "-"}`}
        </Typography.Text>
        <Typography.Text style={{ textAlign: "center", fontWeight: "bold" }}>
          {document.name}
        </Typography.Text>
      </Flex>
    </Card>
  );
});

export default DocumentItem;
