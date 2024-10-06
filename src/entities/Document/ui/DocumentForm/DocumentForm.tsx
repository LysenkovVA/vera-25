"use client";

import { Document } from "@/entities/Document";
import {
  Col,
  DatePicker,
  Divider,
  Flex,
  Form,
  FormInstance,
  Input,
  Row,
  Switch,
  Typography,
} from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { AlertTwoTone, InfoCircleTwoTone } from "@ant-design/icons";
import { ControlParametersFormContent } from "./content/ControlParametersFormContent";
import dayjs from "dayjs";
import { useAppSelector } from "@/shared/lib/hooks/storeHooks";
import { getDocumentIsLoading } from "@/entities/Document/model/selectors/document.selectors";
import ru_RU from "antd/lib/locale/ru_RU";
import { ValidateErrorEntity } from "rc-field-form/es/interface";

export interface DocumentFormProps {
  form: FormInstance;
  initialValue?: Document;
  onFieldsChange?: (document: Document) => void;
  onFinish: () => void;
  onFinishFailed: ((errorInfo: ValidateErrorEntity<any>) => void) | undefined;
}

const _formItemLabelOffset = 0;
const _formItemLabelSpan = 1;
const _formItemFieldOffset = 1;
const _formItemFieldSpan = 23;

const DocumentForm = (props: DocumentFormProps) => {
  const { onFieldsChange, initialValue, form, onFinish, onFinishFailed } =
    props;
  const [isNoEndDate, setIsNoEndDate] = useState(false);

  const isLoading = useAppSelector(getDocumentIsLoading);

  // Рендеринг формы
  useEffect(() => {
    // Начальные значения
    form.setFieldsValue(initialValue);
    console.log("STATE (ДОКУМЕНТ):", JSON.stringify(initialValue, null, 2));
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
      disabled={isLoading}
      onFinish={() => onFinish()}
      onFinishFailed={onFinishFailed}
      onFieldsChange={async (changedFields, allFields) => {
        onFieldsChange?.(form.getFieldsValue());
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
      <Form.Item
        label={"Название"}
        name={["name"]}
        rules={[{ required: true, message: "Не указано название" }]}
        style={{ width: "100%" }}
      >
        <Input.TextArea
          placeholder={"Укажите название"}
          autoSize={{ minRows: 4, maxRows: 4 }}
        />
      </Form.Item>
      <Form.Item colon={false} label={" "}>
        <Row gutter={16} align={"middle"} justify={"center"}>
          <Col span={12}>
            <Form.Item label={"Номер"} name={["number"]}>
              <Input placeholder="Укажите номер" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={"от"}
              name={["date"]}
              // Комбинация getValueProps и normalize правильно преобразует значения для отображения на форме
              getValueProps={(value) => ({
                value: value && dayjs(String(value)),
              })}
              normalize={(value) => value && `${dayjs(value).toISOString()}`}
            >
              <DatePicker
                placeholder="Укажите дату"
                format={"DD.MM.YYYY"}
                locale={ru_RU.DatePicker}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item
        label={"Начало"}
        name={["startDate"]}
        // Комбинация getValueProps и normalize правильно преобразует значения для отображения на форме
        getValueProps={(value) => ({
          value: value && dayjs(String(value)),
        })}
        normalize={(value) => value && `${dayjs(value).toISOString()}`}
      >
        <DatePicker
          placeholder="Укажите дату"
          format={"DD.MM.YYYY"}
          locale={ru_RU.DatePicker}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item label={"Бессрочно"} name={["isNoEndDate"]}>
        <Switch onChange={(e) => onSwitchNoEndDate(e.valueOf())} />
      </Form.Item>
      {!isNoEndDate && (
        <Form.Item
          label={"Окончание"}
          name={["endDate"]}
          // Комбинация getValueProps и normalize правильно преобразует значения для отображения на форме
          getValueProps={(value) => ({
            value: value && dayjs(String(value)),
          })}
          normalize={(value) => value && `${dayjs(value).toISOString()}`}
        >
          <DatePicker
            placeholder="Укажите дату"
            format={"DD.MM.YYYY"}
            locale={ru_RU.DatePicker}
            style={{ width: "100%" }}
          />
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
      <ControlParametersFormContent />
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
