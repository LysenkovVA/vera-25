import { Button, Form, FormInstance, Input } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import React, { useCallback } from "react";
import { Document } from "@/entities/Document";

export interface ControlParameterValuesFormContentProps {
  name: number;
  form: FormInstance;
}

export const ControlParameterValuesFormContent = ({
  name,
  form,
}: ControlParameterValuesFormContentProps) => {
  const reCalcPositions = useCallback(() => {
    const doc = JSON.parse(JSON.stringify(form.getFieldsValue())) as Document;

    if (doc) {
      const newCp = doc.controlParameters?.map((cp) => {
        cp.controlParameterValues?.map((cpv, index) => {
          cpv.position = index + 1;
        });
      });

      form.setFieldsValue({ ...doc, controlParameterValues: { ...newCp } });

      console.log(
        "ОБЪЕКТ ФОРМЫ (ДОКУМЕНТ)",
        JSON.stringify(form.getFieldsValue(), null, 2),
      );
    }
  }, [form]);

  return (
    <Form.List name={[name, "controlParameterValues"]}>
      {(fields, { add, remove }) => (
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
                  <MinusCircleFilled
                    style={{ color: "red" }}
                    onClick={() => {
                      remove(name);
                      reCalcPositions();
                    }}
                  />
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
              onClick={() => add({ position: fields.length + 1 })}
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
