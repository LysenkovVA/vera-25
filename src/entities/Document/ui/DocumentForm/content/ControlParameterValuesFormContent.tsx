import { Button, Form, FormInstance, Input } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import React from "react";

export interface ControlParameterValuesFormContentProps {
  name: number;
  form: FormInstance;
}

export const ControlParameterValuesFormContent = ({
  name,
  form,
}: ControlParameterValuesFormContentProps) => {
  return (
    <Form.List name={[name, "controlParameterValues"]}>
      {(fields, { add, remove, move }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Form.Item
              key={key}
              {...restField}
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 21 }}
              label={`Значение # ${name + 1}`}
              name={[name, "name"]}
              rules={[{ required: true, message: "Не указано значение" }]}
              style={{ marginBottom: 8, width: "100%" }}
            >
              <Input
                suffix={
                  <>
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
                  </>
                }
                placeholder={"Укажите значение"}
              />
            </Form.Item>
          ))}
          <Form.Item
            label={" "}
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 21 }}
          >
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusCircleFilled style={{ color: "green" }} />}
            >
              Добавить значение
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};
