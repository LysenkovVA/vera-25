import { Button, Card, Flex, Form, Input } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import ImageSetForm from "@/features/ImageSetForm/ui/ImageSetForm";

const listName = "imageResources";

export const imageResourceFormContent = (
  <Form.List name={[listName]}>
    {(fields, { add, remove }) => (
      <>
        {fields.map(
          ({
            key: imageResourceKey,
            name: imageResourceIndex,
            ...restField
          }) => (
            <Flex key={imageResourceKey} gap={8}>
              <MinusCircleFilled
                style={{ color: "red" }}
                onClick={() => remove(imageResourceIndex)}
              />
              <Card style={{ marginBottom: 8, width: "100%" }}>
                <>
                  <Form.Item
                    {...restField}
                    labelCol={{ span: 4 }}
                    label={"Название"}
                    name={[imageResourceIndex, "name"]}
                    rules={[{ required: true, message: "Не указано" }]}
                  >
                    <Input placeholder={"Укажите название"} />
                  </Form.Item>
                  <ImageSetForm imageResourceFormIndex={imageResourceIndex} />
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
            Добавить набор
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
);
