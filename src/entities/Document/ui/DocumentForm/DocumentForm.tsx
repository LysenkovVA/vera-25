"use client";

import { Document } from "@/entities/Document";
import {
  Col,
  DatePicker,
  Divider,
  Flex,
  Form,
  Input,
  Row,
  Switch,
  Typography,
} from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { AlertTwoTone, InfoCircleTwoTone } from "@ant-design/icons";
import { ControlParametersFormContent } from "./content/ControlParametersFormContent";

export interface DocumentFormProps {
  initialValue?: Document;
  onFieldsChange?: (document: Document) => void;
}

const _formItemLabelOffset = 0;
const _formItemLabelSpan = 1;
const _formItemFieldOffset = 1;
const _formItemFieldSpan = 23;

const DocumentForm = (props: DocumentFormProps) => {
  const { onFieldsChange, initialValue } = props;
  const [form] = Form.useForm();

  const [isNoEndDate, setIsNoEndDate] = useState(false);

  useEffect(() => {
    form.setFieldsValue(initialValue);
  }, [form, initialValue]);

  const onSwitchNoEndDate = useCallback((value: boolean) => {
    setIsNoEndDate(value);
  }, []);

  return (
    <Form
      id={"documentForm"}
      form={form}
      style={{ width: "100%" }}
      labelWrap
      labelCol={{ span: _formItemLabelSpan }}
      wrapperCol={{ span: _formItemFieldSpan, offset: _formItemFieldOffset }}
      colon={false}
      onFieldsChange={(changedFields, allFields) => {
        onFieldsChange?.(form.getFieldsValue());
        console.log(
          "ОБЪЕКТ ФОРМЫ (ДОКУМЕНТ):",
          JSON.stringify(form.getFieldsValue(), null, 2),
        );
      }}
    >
      <Divider orientation={"left"}>
        <Typography.Title level={4}>
          <Flex gap={4}>
            <InfoCircleTwoTone />
            {"Общие сведения"}
          </Flex>
        </Typography.Title>
      </Divider>
      <Form.Item label={"Название"} name={["name"]} style={{ width: "100%" }}>
        <Input.TextArea
          placeholder={"Укажите название"}
          autoSize={{ minRows: 4, maxRows: 4 }}
        />
      </Form.Item>

      <Form.Item colon={false} label={" "}>
        <Row gutter={16} align={"middle"} justify={"center"}>
          <Col span={12}>
            <Form.Item
              label={"Номер"}
              name={["number"]}
              rules={[{ required: true, message: "Не указан номер" }]}
            >
              <Input placeholder="Укажите номер" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={"от"}
              name={["date"]}
              rules={[{ required: true, message: "Не указана дата" }]}
            >
              <DatePicker
                placeholder="Укажите дату"
                format={"DD.MM.YYYY"}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item
        label={"Начало"}
        name={["startDate"]}
        rules={[{ required: true, message: "Не указана дата" }]}
      >
        <DatePicker placeholder="Укажите дату" />
      </Form.Item>
      <Form.Item label={"Бессрочно"} name={["isNoEndDate"]}>
        <Switch onChange={(e) => onSwitchNoEndDate(e.valueOf())} />
      </Form.Item>
      {!isNoEndDate && (
        <Form.Item
          label={"Окончание"}
          name={["endDate"]}
          rules={[{ required: true, message: "Не указана дата" }]}
        >
          <DatePicker placeholder="Укажите дату" />
        </Form.Item>
      )}
      <Divider orientation={"left"}>
        <Typography.Title level={4}>
          <Flex gap={4}>
            <AlertTwoTone />
            {"Контрольные параметры"}
          </Flex>
        </Typography.Title>
      </Divider>
      <ControlParametersFormContent form={form} />
      <Divider orientation={"left"} />
      <Form.Item label={" "} name={["notes"]} noStyle wrapperCol={{ span: 24 }}>
        <Input.TextArea
          style={{ background: "FloralWhite" }}
          placeholder={"Укажите примечания"}
          autoSize={{ minRows: 3, maxRows: 3 }}
        />
      </Form.Item>
    </Form>
  );
};

export default DocumentForm;
