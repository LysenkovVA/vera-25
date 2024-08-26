import { Button, Card, Flex, Form, Input } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import { FiberColorSelector } from "@/features/FiberColorSelector";
import { FiberMorphologySelector } from "@/features/FiberMorphologySelector";
import { FiberStepSelector } from "@/features/FiberStepSelector";

const listName = "fasteningFibers";

export const fasteningFiberContent = (parentIndex: number) => (
  <>
    <Form.List name={[parentIndex, listName]}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key: fiberKey, name: fiberIndex, ...restField }) => (
            <Flex key={fiberKey} gap={8}>
              <MinusCircleFilled
                style={{ color: "red" }}
                onClick={() => remove(fiberIndex)}
              />
              <Card style={{ marginBottom: 8, width: "100%" }}>
                <>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Цвет"}
                    name={[fiberIndex, "fiberColorId"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <FiberColorSelector placeholder={"Укажите цвет нити"} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Морфология"}
                    name={[fiberIndex, "fiberMorphologyId"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <FiberMorphologySelector
                      placeholder={"Укажите морфологию нити"}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Шаг"}
                    name={[fiberIndex, "fiberStepId"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <FiberStepSelector placeholder={"Укажите шаг нити"} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Примечания"}
                    name={[fiberIndex, "notes"]}
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
              Добавить нить
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  </>
);
