import { Button, Card, Flex, Form, Input } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import React from "react";
import { ControlParameterValuesFormContent } from "@/entities/Document/ui/DocumentForm/content/ControlParameterValuesFormContent";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import { getDocumentDetailsFormData } from "@/entities/Document/model/selectors/document.selectors";
import { documentSliceActions } from "@/entities/Document/model/slice/documentSlice";
import { Document } from "@/entities/Document";

export interface ControlParametersFormContentProps {}

export const ControlParametersFormContent = (
  props: ControlParametersFormContentProps,
) => {
  const dispatch = useAppDispatch();
  const documentFormData = useAppSelector(getDocumentDetailsFormData);

  return (
    <Form.List name={"controlParameters"}>
      {(fields, { add, remove, move }) => (
        <>
          {fields.map(({ key, name: ind, ...restField }) => (
            <Flex key={key} gap={8}>
              <Card
                title={
                  <Flex align={"center"} justify={"space-between"}>
                    {`Контрольный параметр # ${ind + 1}`}
                    <Flex>
                      <MinusCircleFilled
                        style={{ color: "red" }}
                        onClick={() => {
                          // TODO отрефакторить как со значениями
                          if (
                            documentFormData?.controlParameters &&
                            documentFormData.controlParameters[ind].id
                          ) {
                            const newFormData = {
                              ...documentFormData,
                            } as Document;

                            if (!newFormData.removedControlParameters) {
                              newFormData.removedControlParameters = [];
                            }

                            newFormData.removedControlParameters = [
                              ...newFormData.removedControlParameters,
                              {
                                id: documentFormData.controlParameters[ind].id,
                                name: documentFormData.controlParameters[ind]
                                  .name,
                              },
                            ];

                            dispatch(
                              documentSliceActions.setFormData(newFormData),
                            );
                          }

                          remove(ind);
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
                    wrapperCol={{ span: 24 }}
                    name={[ind, "name"]}
                    rules={[
                      {
                        required: true,
                        message: "Не указано значение параметра",
                      },
                    ]}
                  >
                    <Input placeholder={"Укажите название параметра"} />
                  </Form.Item>
                  <ControlParameterValuesFormContent name={ind} />
                </>
              </Card>
            </Flex>
          ))}
          <Button
            type="dashed"
            onClick={() => add()}
            block
            icon={<PlusCircleFilled style={{ color: "green" }} />}
          >
            Добавить контрольный параметр
          </Button>
        </>
      )}
    </Form.List>
  );
};
