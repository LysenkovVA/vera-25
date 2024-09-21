"use client";
import React, { useEffect } from "react";
import { Form } from "antd";
import { Blank } from "@/entities/Blank";
import { infoFormContent } from "./content/infoFormContent";
import { constructionFormContent } from "@/entities/Blank/ui/BlankForm/content/constructionFormContent";
import { imagesFormContent } from "@/entities/Blank/ui/BlankForm/content/imagesFormContent";
import { BlankDocumentMatchFormContent } from "@/entities/Blank/ui/BlankForm/content/blankDocumentMatchFormContent";

export interface BlankDescriptionFormProps {
  initialValue?: Blank;
  onFieldsChange?: (blank: Blank) => void;
}

const BlankForm = (props: BlankDescriptionFormProps) => {
  const { onFieldsChange, initialValue } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValue);
  }, [form, initialValue]);

  return (
    <Form
      id={"blankForm"}
      form={form}
      style={{ padding: 4, width: "100%" }}
      labelCol={{ span: 4 }}
      labelWrap
      wrapperCol={{ span: 16 }}
      onFieldsChange={(changedFields, allFields) => {
        onFieldsChange?.(form.getFieldsValue());
        console.log(
          "ОБЪЕКТ ФОРМЫ:",
          JSON.stringify(form.getFieldsValue(), null, 2),
        );
      }}
    >
      {infoFormContent}
      {constructionFormContent}
      {imagesFormContent}
      <BlankDocumentMatchFormContent />
    </Form>
  );
};

export default BlankForm;
