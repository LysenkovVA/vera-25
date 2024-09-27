import { Button, Card, Flex, Form, FormInstance, Input } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import React, { useCallback } from "react";
import { ControlParameterValuesFormContent } from "@/entities/Document/ui/DocumentForm/content/ControlParameterValuesFormContent";
import { Document } from "@/entities/Document";

export interface ControlParametersFormContentProps {
  form: FormInstance;
}

export const ControlParametersFormContent = (
  props: ControlParametersFormContentProps,
) => {
  const { form } = props;

  const reCalcPositions = useCallback(() => {
    const doc = JSON.parse(JSON.stringify(form.getFieldsValue())) as Document;

    if (doc) {
      const newCp = doc.controlParameters?.map((cp, index) => {
        cp.position = index + 1;
      });

      form.setFieldsValue({ ...doc, controlParameterValues: { ...newCp } });

      console.log(
        "ОБЪЕКТ ФОРМЫ (ДОКУМЕНТ)",
        JSON.stringify(form.getFieldsValue(), null, 2),
      );
    }
  }, [form]);

  return (
    <Form.List name={"controlParameters"}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Flex key={key} gap={8}>
              <Card
                title={
                  <Flex align={"center"} justify={"space-between"}>
                    {`Контрольный параметр # ${name + 1}`}
                    <MinusCircleFilled
                      style={{ color: "red" }}
                      onClick={() => {
                        remove(name);
                        reCalcPositions();
                      }}
                    />
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
            onClick={() => add({ position: fields.length + 1 })}
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
