import { Button, Card, Divider, Flex, Form, Input, Typography } from "antd";
import {
  CheckSquareTwoTone,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import React, { useCallback } from "react";
import { DocumentSelector } from "@/features/DocumentsSelector";
import { ComplianceSelector } from "@/features/ComplienceSelector";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  documentSliceActions,
  documentSliceReducer,
} from "@/entities/Document/model/slice/documentSlice";
import { getDocumentDetails } from "@/entities/Document/model/selectors/document.selectors";
import { fetchDocumentByIdService } from "@/entities/Document/model/services/fetchDocumentByIdService";
import { ControlParameterValueSelector } from "@/entities/ControlParameterValue/ui/ControlParameterValueSelector";
import { ControlParameterValue } from "@/entities/ControlParameterValue";

export const BlankDocumentMatchFormContent = () => {
  const reducers: ReducersList = {
    documentDetails: documentSliceReducer,
  };

  const dispatch = useAppDispatch();
  const documentDetails = useAppSelector(getDocumentDetails);

  const onChangeDocument = useCallback(
    (documentId: string | undefined) => {
      if (documentId) {
        dispatch(fetchDocumentByIdService({ id: documentId }));
      } else {
        dispatch(documentSliceActions.clearAllData({}));
      }
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Divider orientation={"left"}>
        <Typography.Title level={4}>
          <Flex gap={4}>
            <CheckSquareTwoTone />
            {"Соответствие документам"}
          </Flex>
        </Typography.Title>
      </Divider>
      <Form.List name={"blankDocumentMatch"}>
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
                      label={"Документ"}
                      name={[name, "document", "id"]}
                      rules={[{ required: true, message: "Не указано" }]}
                    >
                      <DocumentSelector
                        placeholder={"Укажите документ"}
                        onChange={onChangeDocument}
                      />
                    </Form.Item>
                    {documentDetails?.controlParameters?.map((cp) => (
                      <Form.Item
                        key={cp.id}
                        labelCol={{ span: 4 }}
                        label={cp.name}
                        name={[name, "controlParameterValue", "id"]}
                      >
                        <ControlParameterValueSelector
                          // controlParameterId={cp.id}
                          data={
                            documentDetails?.controlParameters?.filter(
                              (value) => value.id === cp.id,
                            )?.[0]
                              ?.controlParameterValues as ControlParameterValue[]
                          }
                        />
                      </Form.Item>
                    ))}
                    <Form.Item
                      {...restField}
                      labelCol={{ span: 4 }}
                      label={"Соответствие"}
                      name={[name, "compliance"]}
                      rules={[{ required: true, message: "Не указано" }]}
                    >
                      <ComplianceSelector
                        placeholder={"Укажите соответствие"}
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
                Добавить документ
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </DynamicModuleLoader>
  );
};
