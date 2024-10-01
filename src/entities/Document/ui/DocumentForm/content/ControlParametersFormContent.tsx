import { Button, Card, Flex, Form, FormInstance, Input } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import React from "react";
import { ControlParameterValuesFormContent } from "@/entities/Document/ui/DocumentForm/content/ControlParameterValuesFormContent";

export interface ControlParametersFormContentProps {
  form: FormInstance;
}

export const ControlParametersFormContent = (
  props: ControlParametersFormContentProps,
) => {
  const { form } = props;

  return (
    <Form.List name={"controlParameters"}>
      {(fields, { add, remove, move }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Flex key={key} gap={8}>
              <Card
                title={
                  <Flex align={"center"} justify={"space-between"}>
                    {`Контрольный параметр # ${name + 1}`}
                    <Flex>
                      <MinusCircleFilled
                        style={{ color: "red" }}
                        onClick={() => {
                          remove(name);
                        }}
                      />
                      <Button
                        icon={<ArrowUpOutlined />}
                        type="link"
                        onClick={() => {
                          move(name, name - 1);
                        }}
                        disabled={name === 0}
                        style={{ padding: 0, margin: 0 }}
                      />
                      <Button
                        icon={<ArrowDownOutlined />}
                        type="link"
                        onClick={() => {
                          move(name, name + 1);
                        }}
                        disabled={name === fields.length - 1}
                        style={{ padding: 0, margin: 0 }}
                      />
                    </Flex>
                  </Flex>
                }
                styles={{ header: { background: "GhostWhite" } }}
                style={{
                  marginBottom: 8,
                  width: "100%",
                }}
                size={"small"}
              >
                <>
                  <Form.Item
                    {...restField}
                    // labelCol={{ span: 4 }}
                    // label={" "}
                    wrapperCol={{ span: 24 }}
                    name={[name, "name"]}
                    rules={[
                      {
                        required: true,
                        message: "Не указано значение параметра",
                      },
                    ]}
                  >
                    <Input placeholder={"Укажите название параметра"} />
                  </Form.Item>
                  <ControlParameterValuesFormContent name={name} form={form} />
                </>
              </Card>
            </Flex>
          ))}
          {/*<Form.Item style={{ display: "flex", justifyItems: "start" }}>*/}
          <Button
            type="dashed"
            onClick={() => add()}
            block
            icon={<PlusCircleFilled style={{ color: "green" }} />}
          >
            Добавить контрольный параметр
          </Button>
          {/*</Form.Item>*/}
        </>
      )}
    </Form.List>
  );
};
