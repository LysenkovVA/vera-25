"use client";

import { memo } from "react";
import { Document } from "@/entities/Document";
import { Card, Flex, Space, Typography } from "antd";
import dayjs from "dayjs";
import { AlertOutlined } from "@ant-design/icons";
import DocumentItemStatus from "@/entities/Document/ui/DocumentItem/DocumentItemStatus/DocumentItemStatus";
import { EditDocumentButton } from "@/features/DOCUMENTS/EditDocumentButton";
import { DeleteDocumentButton } from "@/features/DOCUMENTS/DeleteDocumentButton";

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
        body: { width: "100%", margin: 0, height: 150 },
      }}
      actions={[
        <Space key={"controlParameters"}>
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
        <DeleteDocumentButton key={"delete"} documentId={document.id} />,
      ]}
    >
      <Flex vertical align={"center"} justify={"center"}>
        <Typography.Text
          style={{
            fontSize: 16,
            textAlign: "center",
            paddingBottom: 16,
            color: "darkgrey",
          }}
        >
          {`№ ${document.number ?? "-"} от ${document.date ? dayjs(document.date).format("DD.MM.YYYY") : "-"}`}
        </Typography.Text>
        <Typography.Paragraph
          style={{ textAlign: "center", fontWeight: "bold" }}
          ellipsis={{ rows: 4, expandable: false }}
        >
          {document.name}
        </Typography.Paragraph>
      </Flex>
    </Card>
  );
});

export default DocumentItem;
