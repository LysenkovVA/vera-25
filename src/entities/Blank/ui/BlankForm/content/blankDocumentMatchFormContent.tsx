import { Button, Card, Divider, Flex, Form, Input, Typography } from "antd";
import {
  CheckSquareTwoTone,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import React from "react";

export const blankDocumentMatchFormContent = (
  <>
    <Divider orientation={"left"}>
      <Typography.Title level={4}>
        <Flex gap={4}>
          <CheckSquareTwoTone />
          {"Соответствие документам"}
        </Flex>
      </Typography.Title>
    </Divider>
    <Form.List name={"blankDocumentMatch"}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Flex key={key} gap={8}>
              <MinusCircleFilled
                style={{ color: "red" }}
                onClick={() => {
                  remove(name);
                }}
              />
              <Card style={{ marginBottom: 8, width: "100%" }}>
                <>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Документ"}
                    name={[name, "document", "id"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <div>{"Список документов"}</div>
                    {/*<CoverDesignSelector placeholder="Укажите конструкцию" />*/}
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
              Добавить документ
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  </>
);
