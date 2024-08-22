"use client";
import React from "react";
import {
  Button,
  Card,
  Divider,
  Flex,
  Form,
  Input,
  Switch,
  Typography,
} from "antd";
import { FieldData } from "rc-field-form/es/interface";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { SecurityLevelSelector } from "@/entities/SecurityLevel";

export interface BlankDescriptionFormProps {
  onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
}

const BlankForm = (props: BlankDescriptionFormProps) => {
  const { onFieldsChange } = props;

  const coverFormContent = (
    <Form.List name={"covers"}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Flex key={key} gap={8}>
              <MinusCircleFilled
                style={{ color: "red" }}
                onClick={() => remove(name)}
              />
              <Card style={{ marginBottom: 8, width: "100%" }}>
                <>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Конструкция"}
                    name={[name, "coverDesign"]}
                    rules={[
                      { required: true, message: "Не указана конструкция" },
                    ]}
                  >
                    <Input placeholder="Укажите конструкцию" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Формат, мм"}
                    name={[name, "coverFormat"]}
                    rules={[{ required: true, message: "Не указан формат" }]}
                  >
                    <Input placeholder="Укажите формат в мм" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Цвет покровного материала"}
                    name={[name, "coverColor"]}
                    rules={[{ required: true, message: "Не указан цвет" }]}
                  >
                    <Input placeholder="Укажите цвет" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Фактура покровного материала"}
                    name={[name, "coverTexture"]}
                    rules={[{ required: true, message: "Не указана фактура" }]}
                  >
                    <Input placeholder={"Укажите фактуру"} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Способ нанесения изображений"}
                    name={[name, "coverImageMethod"]}
                    rules={[
                      {
                        required: true,
                        message: "Не указан способ нанесения",
                      },
                    ]}
                  >
                    <Input
                      placeholder={"Укажите способ нанесения изображений"}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Примечания"}
                    name={[name, "coverNotes"]}
                  >
                    <Input placeholder={"Укажите примечания"} />
                  </Form.Item>
                </>
              </Card>
            </Flex>
          ))}
          <Form.Item style={{ display: "flex", justifyItems: "start" }}>
            <Button
              type="link"
              onClick={() => add()}
              block
              icon={<PlusCircleFilled style={{ color: "green" }} />}
            >
              Добавить обложку
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );

  const blockFormContent = (
    <Form.List name={"blocks"}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Flex key={key} gap={8}>
              <MinusCircleFilled
                style={{ color: "red" }}
                onClick={() => remove(name)}
              />
              <Card style={{ marginBottom: 8, width: "100%" }}>
                <>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Конструкция"}
                    name={[name, "blockDesign"]}
                    rules={[
                      { required: true, message: "Не указана конструкция" },
                    ]}
                  >
                    <Input placeholder="Укажите конструкцию" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Формат, мм"}
                    name={[name, "blockFormat"]}
                    rules={[{ required: true, message: "Не указан формат" }]}
                  >
                    <Input placeholder="Укажите формат в мм" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Форма углов"}
                    name={[name, "blockCornersDesign"]}
                    rules={[
                      { required: true, message: "Не указана форма углов" },
                    ]}
                  >
                    <Input placeholder="Укажите форму углов" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Материал страниц"}
                    name={[name, "blockPagesMaterial"]}
                    rules={[
                      { required: true, message: "Не указан материал страниц" },
                    ]}
                  >
                    <Input placeholder={"Укажите материал страниц"} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Количество страниц"}
                    name={[name, "pagesInBlock"]}
                    rules={[
                      {
                        required: true,
                        message: "Не указано количество страниц",
                      },
                    ]}
                  >
                    <Input placeholder={"Укажите количество страниц"} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Пронумеровано страниц"}
                    name={[name, "pagesNumbered"]}
                    rules={[
                      {
                        required: true,
                        message:
                          "Не указано количество пронумерованных страниц",
                      },
                    ]}
                  >
                    <Input
                      placeholder={"Укажите количество пронумерованных страниц"}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Наличие форзацев"}
                    name={[name, "hasEndPapers"]}
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Примечания"}
                    name={[name, "coverNotes"]}
                  >
                    <Input placeholder={"Укажите примечания"} />
                  </Form.Item>
                </>
              </Card>
            </Flex>
          ))}
          <Form.Item style={{ display: "flex", justifyItems: "start" }}>
            <Button
              type="link"
              onClick={() => add()}
              block
              icon={<PlusCircleFilled style={{ color: "green" }} />}
            >
              Добавить блок
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );

  const fasteningFormContent = (
    <Form.List name={"fastenings"}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Flex key={key} gap={8}>
              <MinusCircleFilled
                style={{ color: "red" }}
                onClick={() => remove(name)}
              />
              <Card style={{ marginBottom: 8, width: "100%" }}>
                <>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Способ скрепления блока с обложкой"}
                    name={[name, "blockAndCoverFasteningMethod"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <Input placeholder="Укажите" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Способо скрпепления страниц блока"}
                    name={[name, "blockPagesFasteningMethod"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <Input placeholder="Укажите" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Нить"}
                    name={[name, "fasteningFibers"]}
                  >
                    <Input placeholder="Укажите" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Скобы"}
                    name={[name, "fasteningStaples"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <Input placeholder={"Укажите"} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Примечания"}
                    name={[name, "notes"]}
                  >
                    <Input placeholder={"Укажите примечания"} />
                  </Form.Item>
                </>
              </Card>
            </Flex>
          ))}
          <Form.Item style={{ display: "flex", justifyItems: "start" }}>
            <Button
              type="link"
              onClick={() => add()}
              block
              icon={<PlusCircleFilled style={{ color: "green" }} />}
            >
              Добавить скрепление
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );

  return (
    <Form
      id={"blankForm"}
      style={{ padding: 4, width: "100%" }}
      labelCol={{ span: 4 }}
      labelWrap
      wrapperCol={{ span: 16 }}
      onFieldsChange={onFieldsChange}
    >
      <Divider orientation={"left"}>
        <Typography.Title level={4}>Общие сведения</Typography.Title>
      </Divider>
      <Form.Item label={"Название"} name={"name"}>
        <Input placeholder={"Укажите название бланка"} />
      </Form.Item>
      <Form.Item label={"Страна"} name={"country"}>
        <Input placeholder={"Укажите страну"} />
      </Form.Item>
      <Form.Item label={"Производитель"} name={"manufacturer"}>
        <Input placeholder={"Укажите производителя"} />
      </Form.Item>
      <Form.Item label={"Уровень защищенности"} name={"securityLevel"}>
        <SecurityLevelSelector />
      </Form.Item>
      <Divider orientation={"left"}>
        <Typography.Title level={4}>Конструкция</Typography.Title>
      </Divider>
      <Form.Item label={"Обложка"}>{coverFormContent}</Form.Item>
      <Form.Item label={"Блок"}>{blockFormContent}</Form.Item>
      <Form.Item label={"Скрепление"}>{fasteningFormContent}</Form.Item>
    </Form>
  );
};

export default BlankForm;
