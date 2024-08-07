import React, { memo } from "react";
import { Button, Card, Flex, Form, Input } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";

export const CoverForm = memo(() => {
  return (
    <Form
      id={"CoverForm"}
      layout={"vertical"}
      size={"middle"}
      variant={"outlined"}
      labelCol={{ span: 24, offset: 0 }}
      labelWrap
      wrapperCol={{ span: 24, offset: 0 }}
    >
      <Form.List name="covers">
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
                      label={"Формат, мм"}
                      name={[name, "coverFormat"]}
                      rules={[{ required: true, message: "Не указан формат" }]}
                    >
                      <Input placeholder="Укажите формат в мм" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      label={"Цвет покровного материала"}
                      name={[name, "coverColor"]}
                      rules={[{ required: true, message: "Не указан цвет" }]}
                    >
                      <Input placeholder="Укажите цвет" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      label={"Фактура покровного материала"}
                      name={[name, "coverTexture"]}
                      rules={[
                        { required: true, message: "Не указана фактура" },
                      ]}
                    >
                      <Input placeholder={"Укажите фактуру"} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
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
    </Form>
  );
});
