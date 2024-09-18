import React from "react";
import { Button, Card, Flex, Form, Input } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { LaminateTypeSelector } from "@/features/LaminateTypeSelector";
import { LaminateMethodSelector } from "@/features/LaminateMethodSelector";
import { ApplyingDataMethodSelector } from "@/features/ApplyingDataMethodSelector";

export const personalizationFormContent = (
  <>
    <Form.Item
      label={<Flex gap={4}>{"Количество страниц"}</Flex>}
      name={"pagesCount"}
    >
      <Input placeholder={"Укажите количество страниц"} />
    </Form.Item>

    <Form.List name={"laminates"}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(
            ({ key: laminateKey, name: laminateIndex, ...restField }) => (
              <Flex key={laminateKey} gap={8}>
                <MinusCircleFilled
                  style={{ color: "red" }}
                  onClick={() => remove(laminateIndex)}
                />
                <Card style={{ marginBottom: 8, width: "100%" }}>
                  <>
                    <Form.Item
                      {...restField}
                      labelCol={{ span: 4 }}
                      label={"Тип"}
                      name={[laminateIndex, "laminateType", "id"]}
                      rules={[{ required: true, message: "Не указано" }]}
                    >
                      <LaminateTypeSelector placeholder="Укажите тип ламината" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      labelCol={{ span: 4 }}
                      label={"Метод"}
                      name={[laminateIndex, "laminateMethod", "id"]}
                      rules={[{ required: true, message: "Не указано" }]}
                    >
                      <LaminateMethodSelector placeholder="Укажите способ ламинирования" />
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
              Добавить ламинат
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    <Form.Item
      label={<Flex gap={4}>{"Содержание"}</Flex>}
      name={"personalizationDataContents"}
    >
      <Input.TextArea
        placeholder={"Укажите содержание"}
        autoSize={{ minRows: 3, maxRows: 3 }}
      />
    </Form.Item>
    <Form.Item
      label={<Flex gap={4}>{"Способ нанесения данных"}</Flex>}
      name={["applyingDataMethod", "id"]}
    >
      <ApplyingDataMethodSelector
        placeholder={"Укажите способ нанесения данных"}
      />
    </Form.Item>
  </>
);
