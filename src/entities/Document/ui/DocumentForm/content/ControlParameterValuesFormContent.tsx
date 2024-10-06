import { Button, Form, Input } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import { getDocumentDetailsFormData } from "@/entities/Document/model/selectors/document.selectors";
import { cloneDeep } from "lodash";
import { documentSliceActions } from "@/entities/Document/model/slice/documentSlice";

export interface ControlParameterValuesFormContentProps {
  name: number;
}

export const ControlParameterValuesFormContent = ({
  name,
}: ControlParameterValuesFormContentProps) => {
  const dispatch = useAppDispatch();
  const documentFormData = useAppSelector(getDocumentDetailsFormData);

  return (
    <Form.List name={[name, "controlParameterValues"]}>
      {(fields, { add, remove, move }) => (
        <>
          {fields.map(({ key, name: ind, ...restField }) => (
            <Form.Item
              key={key}
              {...restField}
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 21 }}
              label={`Значение # ${ind + 1}`}
              name={[ind, "name"]}
              rules={[{ required: true, message: "Не указано значение" }]}
              style={{ marginBottom: 8, width: "100%" }}
            >
              <Input
                suffix={
                  <>
                    <MinusCircleFilled
                      style={{ color: "red" }}
                      onClick={() => {
                        if (
                          documentFormData?.controlParameters![name] &&
                          documentFormData.controlParameters[name]
                            .controlParameterValues![ind].id
                        ) {
                          // Клонируем объект
                          const docClone = cloneDeep(documentFormData);

                          remove(ind);

                          // Добавляем удаляемый объект в массив удаленных
                          if (
                            docClone?.controlParameters &&
                            docClone.controlParameters[name]
                          ) {
                            if (
                              !docClone.controlParameters[name]
                                .removedControlParametersValues
                            ) {
                              docClone.controlParameters[
                                name
                              ].removedControlParametersValues = [];
                            }

                            docClone.controlParameters[
                              name
                            ].removedControlParametersValues.push({
                              id: docClone.controlParameters[name]
                                .controlParameterValues![ind].id,
                              name: docClone.controlParameters[name]
                                .controlParameterValues![ind].name,
                            });

                            // Убираем из списка то, что удалили
                            docClone.controlParameters[
                              name
                            ].controlParameterValues!.splice(ind, 1);
                          }

                          dispatch(documentSliceActions.setFormData(docClone));
                        }
                      }}
                    />
                    <Button
                      icon={<ArrowUpOutlined />}
                      type="link"
                      onClick={() => {
                        move(ind, ind - 1);
                      }}
                      disabled={ind === 0}
                      style={{ padding: 0, margin: 0 }}
                    />
                    <Button
                      icon={<ArrowDownOutlined />}
                      type="link"
                      onClick={() => {
                        move(ind, ind + 1);
                      }}
                      disabled={ind === fields.length - 1}
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
