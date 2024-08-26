"use client";
import React from "react";
import { Form, message } from "antd";
import { Blank } from "@/entities/Blank";
import { infoFormContent } from "./content/infoFormContent";
import { constructionFormContent } from "@/entities/Blank/ui/BlankForm/content/constructionFormContent";
import { imagesFormContent } from "@/entities/Blank/ui/BlankForm/content/imagesFormContent";

export interface BlankDescriptionFormProps {
  initialValue?: Blank;
  onFieldsChange?: (blank: Blank) => void;
}

const BlankForm = (props: BlankDescriptionFormProps) => {
  const { onFieldsChange } = props;

  const [form] = Form.useForm();

  return (
    <Form
      id={"blankForm"}
      form={form}
      style={{ padding: 4, width: "100%" }}
      labelCol={{ span: 4 }}
      labelWrap
      wrapperCol={{ span: 16 }}
      onFieldsChange={(changedFields, allFields) => {
        // onFieldsChange?.(changedFields, allFields);
        onFieldsChange?.(form.getFieldsValue());
        message.info(JSON.stringify(form.getFieldsValue(), null, 2));
      }}
    >
      {infoFormContent}
      {constructionFormContent}
      {imagesFormContent}
    </Form>
  );
};

export default BlankForm;
