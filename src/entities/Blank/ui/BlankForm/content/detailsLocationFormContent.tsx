import React from "react";
import { Button, Card, Flex, Form, Input } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { DetailTypeSelector } from "@/features/DetailTypeSelector";
import { LocationSelector } from "@/features/LocationSelector";

const listName = "details";

export const detailsLocationFormContent = (
  <Form.List name={[listName]}>
    {(fields, { add, remove }) => (
      <>
        {fields.map(({ key: detailsKey, name: detailsIndex, ...restField }) => (
          <Flex key={detailsKey} gap={8}>
            <MinusCircleFilled
              style={{ color: "red" }}
              onClick={() => remove(detailsIndex)}
            />
            <Card style={{ marginBottom: 8, width: "100%" }}>
              <>
                <Form.Item
                  {...restField}
                  labelCol={{ span: 4 }}
                  label={"Тип"}
                  name={[detailsIndex, "detailType", "id"]}
                  rules={[{ required: true, message: "Не указано" }]}
                >
                  <DetailTypeSelector placeholder="Укажите тип" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  labelCol={{ span: 4 }}
                  label={"Расположение"}
                  // ЭТО Enum в схеме Prisma
                  name={[detailsIndex, "location"]}
                  rules={[{ required: true, message: "Не указано" }]}
                >
                  <LocationSelector placeholder="Укажите расположение" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  labelCol={{ span: 4 }}
                  label={"Примечания"}
                  name={[detailsIndex, "notes"]}
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
            Добавить реквизит
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
);
