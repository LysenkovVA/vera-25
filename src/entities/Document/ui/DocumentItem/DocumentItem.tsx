"use client";

import { memo } from "react";
import { Document } from "@/entities/Document";
import { Card, Flex, Typography } from "antd";
import dayjs from "dayjs";

export interface DocumentItemProps {
  document: Document;
  onClick?: (id: string) => void;
}

const DocumentItem = memo((props: DocumentItemProps) => {
  const { document, onClick } = props;

  const titleContent = (
    <Flex gap={4} justify={"space-between"}>
      <Typography.Text type={"secondary"}>
        {`${document?.number} от ${dayjs(document.date).format("DD.MM.YYYY")}`}
      </Typography.Text>
    </Flex>
  );

  return (
    <Card
      title={titleContent}
      size={"small"}
      // cover={
      //   <Image
      //     alt={"background"}
      //     src={backgroundCard.src}
      //     style={{ color: "black" }}
      //   />
      // }
      style={{
        width: "100%",
        margin: 0,
        // cursor: "pointer",
        // background: "lightgray",
      }}
      actions={
        [
          // <CheckOutlined key={"documents"} />,
          // <EyeOutlined key={"view"} />,
          // <EditDocumentButton key={"edit"} DocumentId={Document.id} />,
          // <DeleteDocumentButton key={"delete"} DocumentId={Document.id} />,
        ]
      }
      // onClick={() => {
      //   router.push(`${process.env.NEXT_PUBLIC_BASE_PATH}/Documents/${Document.id}`);
      // }}
    >
      <Flex vertical align={"center"} justify={"center"}>
        <Typography.Title style={{ textAlign: "center" }} level={5}>
          {document.name}
        </Typography.Title>
      </Flex>
    </Card>
  );
});

export default DocumentItem;
