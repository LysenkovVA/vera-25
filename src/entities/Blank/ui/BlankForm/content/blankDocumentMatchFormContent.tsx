import { Button, Card, Divider, Flex, Form, Input, Typography } from "antd";
import {
  CheckSquareTwoTone,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import React, { useCallback } from "react";
import { DocumentSelector } from "@/features/DocumentsSelector";
import { ComplianceSelector } from "@/features/ComplienceSelector";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  ControlParameter,
  controlParametersListActions,
  controlParametersListReducer,
  fetchControlParametersListByDocumentIdService,
  getControlParametersList,
} from "@/entities/ControlParameter";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import { controlParameterValuesListReducer } from "@/entities/ControlParameterValue/model/slice/controlParameterValuesListSlice";
import { fetchControlParameterValuesListByControlParameterIdService } from "@/entities/ControlParameterValue/model/services/fetchControlParameterValuesListByControlParameterId/fetchControlParameterValuesListByControlParameterIdService";
import { getControlParameterValuesList } from "@/entities/ControlParameterValue/model/selectors/controlParameterValuesList.selectors";
import { ControlParameterValueSelector } from "@/entities/ControlParameterValue/ui/ControlParameterValueSelector";

export const BlankDocumentMatchFormContent = () => {
  const reducers: ReducersList = {
    controlParametersList: controlParametersListReducer,
    controlParameterValuesList: controlParameterValuesListReducer,
  };

  const dispatch = useAppDispatch();
  const controlParameters = useAppSelector(getControlParametersList.selectAll);
  const controlParameterValuesList = useAppSelector(
    getControlParameterValuesList.selectAll,
  );

  const onChangeDocument = useCallback(
    (documentId: string | undefined) => {
      if (documentId) {
        dispatch(
          fetchControlParametersListByDocumentIdService({
            replaceData: true,
            documentId,
          }),
        ).then((result) => {
          const list: ControlParameter[] = result.payload as ControlParameter[];

          list.map((cpv) => {
            dispatch(
              fetchControlParameterValuesListByControlParameterIdService({
                controlParameterId: cpv.id,
                replaceData: true,
              }),
            );
          });
        });
      } else {
        dispatch(controlParametersListActions.clearControlParametersList());
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
                    {controlParameters.map((cp) => (
                      <Form.Item
                        key={cp.id}
                        labelCol={{ span: 4 }}
                        label={cp.name}
                        name={[name, "controlParameterValue", "id"]}
                      >
                        <ControlParameterValueSelector
                          controlParameterId={cp.id}
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
