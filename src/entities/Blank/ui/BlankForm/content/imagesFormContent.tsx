import { Divider, Flex, Typography } from "antd";
import { FileImageTwoTone } from "@ant-design/icons";
import React from "react";

export const imagesFormContent = (
  <>
    <Divider orientation={"left"}>
      <Typography.Title level={4}>
        <Flex gap={4}>
          <FileImageTwoTone />
          {"Изображения"}
        </Flex>
      </Typography.Title>
    </Divider>
  </>
);
