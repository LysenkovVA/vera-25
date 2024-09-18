import { Button, Card, Flex, Form, Input } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { StaplesMaterialSelector } from "@/features/StaplesMaterialSelector";
import { StaplesBackSizeSelector } from "@/features/StaplesBackSizeSelector";
import { StaplesDistanceSelector } from "@/features/StaplesDistanceSelector";

const listName = "fasteningStaples";

export const fasteningStaplesContent = (parentIndex: number) => (
  <>
    <Form.List name={[parentIndex, listName]}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(
            ({ key: staplesKey, name: staplesIndex, ...restField }) => (
              <Flex key={staplesKey} gap={8}>
                <MinusCircleFilled
                  style={{ color: "red" }}
                  onClick={() => remove(staplesIndex)}
                />
                <Card style={{ marginBottom: 8, width: "100%" }}>
                  <>
                    <Form.Item
                      {...restField}
                      labelCol={{ span: 4 }}
                      label={"Материал"}
                      name={[staplesIndex, "staplesMaterial", "id"]}
                      rules={[{ required: true, message: "Не указано" }]}
                    >
                      <StaplesMaterialSelector
                        placeholder={"Укажите материал скрепок"}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      labelCol={{ span: 4 }}
                      label={"Размер спинок"}
                      name={[staplesIndex, "staplesBackSize", "id"]}
                      rules={[{ required: true, message: "Не указано" }]}
                    >
                      <StaplesBackSizeSelector
                        placeholder={"Укажите размер спинок скрепок"}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      labelCol={{ span: 4 }}
                      label={"Расстояние"}
                      name={[staplesIndex, "staplesDistance", "id"]}
                      rules={[{ required: true, message: "Не указано" }]}
                    >
                      <StaplesDistanceSelector
                        placeholder={"Укажите расстояние между скрепками"}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      labelCol={{ span: 4 }}
                      label={"Примечания"}
                      name={[staplesIndex, "notes"]}
                    >
                      <Input.TextArea
                        placeholder={"Укажите примечания"}
                        autoSize={{ minRows: 3, maxRows: 3 }}
                      />
                    </Form.Item>
                  </>
                </Card>
              </Flex>
            ),
          )}
          <Form.Item style={{ display: "flex", justifyItems: "start" }}>
            <Button
              type="link"
              onClick={() => add()}
              block
              icon={<PlusCircleFilled style={{ color: "green" }} />}
            >
              Добавить скобы
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  </>
);
