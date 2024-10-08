import { Divider, Flex, Form, Input, Typography } from "antd";
import { HomeFilled, InfoCircleTwoTone, ToolFilled } from "@ant-design/icons";
import { CountrySelector } from "@/features/CountrySelector";
import { ManufacturerSelector } from "@/features/ManufacturerSelector";
import React from "react";
import { BlankTypeSelector } from "@/features/BlankTypeSelector";

export const infoFormContent = (
  <>
    <Divider orientation={"left"}>
      <Typography.Title level={4}>
        <Flex gap={4}>
          <InfoCircleTwoTone />
          {"Общие сведения"}
        </Flex>
      </Typography.Title>
    </Divider>
    <Form.Item label={<Flex gap={4}>{"Название"}</Flex>} name={"name"}>
      <Input.TextArea
        placeholder={"Укажите название бланка"}
        autoSize={{ minRows: 3, maxRows: 3 }}
      />
    </Form.Item>
    <Form.Item label={<Flex gap={4}>{"Тип"}</Flex>} name={"blankTypeId"}>
      <BlankTypeSelector placeholder={"Укажите тип"} />
    </Form.Item>
    <Form.Item
      label={
        <Flex gap={4}>
          <HomeFilled />
          {"Страна"}
        </Flex>
      }
      name={"countryId"}
    >
      <CountrySelector placeholder={"Укажите страну"} />
    </Form.Item>
    <Form.Item
      label={
        <Flex gap={4}>
          <ToolFilled />
          {"Производитель"}
        </Flex>
      }
      name={"manufacturerId"}
    >
      <ManufacturerSelector placeholder={"Укажите производителя"} />
    </Form.Item>
    {/*<Form.Item*/}
    {/*  label={*/}
    {/*    <Flex gap={4}>*/}
    {/*      <LockFilled />*/}
    {/*      {"Уровень защищенности"}*/}
    {/*    </Flex>*/}
    {/*  }*/}
    {/*  name={"securityLevelId"}*/}
    {/*>*/}
    {/*  <SecurityLevelSelector placeholder={"Укажите уровень защищенности"} />*/}
    {/*</Form.Item>*/}
  </>
);
