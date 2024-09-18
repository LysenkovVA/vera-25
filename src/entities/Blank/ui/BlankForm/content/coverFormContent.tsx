import { Button, Card, Flex, Form, Input } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { CoverDesignSelector } from "@/features/CoverDesignSelector";
import { CoverColorSelector } from "@/features/CoverColorSelector";
import { CoverTextureSelector } from "@/features/CoverTextureSelector";
import { CoverImageMethodSelector } from "@/features/CoverImageMethodSelector";
import React from "react";

export const coverFormContent = (
  <Form.List name={"covers"}>
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
                  label={"Конструкция"}
                  name={[name, "coverDesign", "id"]}
                  rules={[
                    { required: true, message: "Не указана конструкция" },
                  ]}
                >
                  <CoverDesignSelector placeholder="Укажите конструкцию" />
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
                  name={[name, "coverColor", "id"]}
                  rules={[{ required: true, message: "Не указан цвет" }]}
                >
                  <CoverColorSelector placeholder="Укажите цвет" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  labelCol={{ span: 4 }}
                  label={"Фактура покровного материала"}
                  name={[name, "coverTexture", "id"]}
                  rules={[{ required: true, message: "Не указана фактура" }]}
                >
                  <CoverTextureSelector placeholder={"Укажите фактуру"} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  labelCol={{ span: 4 }}
                  label={"Способ нанесения изображений"}
                  name={[name, "coverImageMethod", "id"]}
                  rules={[
                    {
                      required: true,
                      message: "Не указан способ нанесения",
                    },
                  ]}
                >
                  <CoverImageMethodSelector
                    placeholder={"Укажите способ нанесения изображений"}
                  />
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
            Добавить обложку
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
);
