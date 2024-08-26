import { Divider, Flex, Form, Tabs, Typography } from "antd";
import {
  ApiFilled,
  AppstoreTwoTone,
  BookFilled,
  ContactsFilled,
  ContainerFilled,
  EnvironmentFilled,
} from "@ant-design/icons";
import React from "react";
import { coverFormContent } from "@/entities/Blank/ui/BlankForm/content/coverFormContent";
import { blockFormContent } from "@/entities/Blank/ui/BlankForm/content/blockFormContent";
import { detailsLocationFormContent } from "@/entities/Blank/ui/BlankForm/content/detailsLocationFormContent";
import { personalizationFormContent } from "@/entities/Blank/ui/BlankForm/content/personalizationFormContent";
import { fasteningFormContent } from "@/entities/Blank/ui/BlankForm/content/fasteningFormContent";

const tabsItems: {
  label: string;
  key: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}[] = [
  {
    label: "Обложка",
    key: "1",
    children: coverFormContent,
    icon: <BookFilled />,
  },
  {
    label: "Блок",
    key: "2",
    children: blockFormContent,
    icon: <ContainerFilled />,
  },
  {
    label: "Скрепление",
    key: "3",
    children: fasteningFormContent,
    icon: <ApiFilled />,
  },
  {
    label: "Реквизиты",
    key: "4",
    children: detailsLocationFormContent,
    icon: <EnvironmentFilled />,
  },
  {
    label: "Персонализация",
    key: "5",
    children: personalizationFormContent,
    icon: <ContactsFilled />,
  },
];

export const constructionFormContent = (
  <>
    <Divider orientation={"left"}>
      <Typography.Title level={4}>
        <Flex gap={4}>
          <AppstoreTwoTone />
          {"Конструкция"}
        </Flex>
      </Typography.Title>
    </Divider>
    <Form.Item colon={false} label={" "}>
      <Tabs tabPosition={"top"} items={tabsItems} />
    </Form.Item>
  </>
);
