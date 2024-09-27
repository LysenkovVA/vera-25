"use client";

import { Button, Divider, Flex, Form, FormInstance, Typography } from "antd";
import {
  CheckSquareTwoTone,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import React from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { documentSliceReducer } from "@/entities/Document/model/slice/documentSlice";
import BlankDocumentCard from "@/entities/Blank/ui/BlankForm/content/blankDocumentCard";

export interface BlankDocumentMatchFormContentProps {
  form: FormInstance;
}

export const BlankDocumentMatchFormContent = (
  props: BlankDocumentMatchFormContentProps,
) => {
  const reducers: ReducersList = {
    documentDetails: documentSliceReducer,
  };

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
      <Form.List name={"blankDocumentMatches"}>
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
                <BlankDocumentCard name={name} />
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
