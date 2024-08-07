import React from "react";
import { Card, Form, Input } from "antd";
import { CoverForm } from "@/entities/Cover";

const BlankDescriptionForm = () => {
  return (
    <Form
      id={"blankDescriptionForm"}
      style={{ padding: 16, width: "100%" }}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label={"Название"}>
        <Input placeholder={"Укажите название бланка"} />
      </Form.Item>
      <Form.Item label={"Обложка"}>
        <CoverForm />
      </Form.Item>
      <Form.Item label={"Блок"}>
        <Card></Card>
      </Form.Item>
      <Form.Item label={"Скрепление"}>
        <Card></Card>
      </Form.Item>
      <Form.Item label={"Размещение основных реквизитов"}>
        <Card></Card>
      </Form.Item>
      <Form.Item label={"Персонализация"}>
        <Card></Card>
      </Form.Item>
    </Form>
  );
};

export default BlankDescriptionForm;
