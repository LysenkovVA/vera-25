import { Divider, Flex, Form, Typography } from "antd";
import { FileImageTwoTone } from "@ant-design/icons";
import React from "react";
import { imageResourceFormContent } from "@/entities/Blank/ui/BlankForm/content/imageResourceFormContent";

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
    <Form.Item
      labelCol={{ span: 4 }}
      label={"Набор"}
      name={["imageResources"]}
      rules={[{ required: true, message: "Не указано" }]}
    >
      {imageResourceFormContent}
    </Form.Item>
  </>
);
