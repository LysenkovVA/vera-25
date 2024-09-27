"use client";

import { memo } from "react";
import { Blank } from "@/entities/Blank";
import { Card, Flex, Typography } from "antd";
import EditBlankButton from "@/features/BLANKS/EditBlankButton/ui/EditBlankButton";
import { CheckOutlined, EyeOutlined } from "@ant-design/icons";
import { DeleteBlankButton } from "@/features/BLANKS/DeleteBlankButton";

export interface BlankItemProps {
  blank: Blank;
  onClick?: (id: string) => void;
}

const BlankItem = memo((props: BlankItemProps) => {
  const { blank, onClick } = props;

  const titleContent = (
    <Flex gap={4} justify={"space-between"}>
      <Typography.Text type={"secondary"}>
        {blank.blankType?.name}
      </Typography.Text>
    </Flex>
  );

  return (
    <Card
      title={titleContent}
      size={"small"}
      style={{ width: "100%", margin: 0, cursor: "pointer" }}
      actions={[
        <CheckOutlined key={"documents"} />,
        <EyeOutlined key={"view"} />,
        <EditBlankButton key={"edit"} blankId={blank.id} />,
        <DeleteBlankButton key={"delete"} blankId={blank.id} />,
      ]}
      // onClick={() => {
      //   router.push(`${process.env.NEXT_PUBLIC_BASE_PATH}/blanks/${blank.id}`);
      // }}
    >
      <Flex vertical align={"center"} justify={"center"}>
        <Typography.Title level={5}>{blank.name}</Typography.Title>
      </Flex>
    </Card>
  );
});

export default BlankItem;
