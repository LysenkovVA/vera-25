import { Button, Card, Flex, Form, Input, Switch } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { BlockDesignSelector } from "@/features/BlockDesignSelector";
import { BlockCornersDesignSelector } from "@/features/BlockCornerDesignSelector";
import { BlockPagesMaterialSelector } from "@/features/BlockPageMaterialSelector";
import React from "react";

export const blockFormContent = (
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
                  name={[name, "blockDesign", "id"]}
                  rules={[
                    { required: true, message: "Не указана конструкция" },
                  ]}
                >
                  <BlockDesignSelector placeholder="Укажите конструкцию" />
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
                  name={[name, "blockCornersDesign", "id"]}
                  rules={[
                    { required: true, message: "Не указана форма углов" },
                  ]}
                >
                  <BlockCornersDesignSelector placeholder="Укажите форму углов" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  labelCol={{ span: 4 }}
                  label={"Материал страниц"}
                  name={[name, "blockPagesMaterial", "id"]}
                  rules={[
                    { required: true, message: "Не указан материал страниц" },
                  ]}
                >
                  <BlockPagesMaterialSelector
                    placeholder={"Укажите материал страниц"}
                  />
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
                      message: "Не указано количество пронумерованных страниц",
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
                  name={[name, "notes"]}
                >
                  <Input.TextArea
                    placeholder={"Укажите примечания"}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                  />
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
