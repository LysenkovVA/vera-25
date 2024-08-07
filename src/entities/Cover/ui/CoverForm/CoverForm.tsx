import React from "react";
import { Form } from "antd";

const CoverForm = () => {
  return (
    <Form>
      <Form.Item label={"Конструкция"}>
        <div>Конструкция</div>
      </Form.Item>
      <Form.Item label={"Формат, мм"}>
        <div>Формат, мм</div>
      </Form.Item>
      <Form.Item label={"Цвет покровного материала"}>
        <div>Цвет покровного материала</div>
      </Form.Item>
      <Form.Item label={"Фактура покровного материала"}>
        <div>Фактура покровного материала</div>
      </Form.Item>
      <Form.Item label={"Способ нанесения изображений"}>
        <div>Способ нанесения изображений</div>
      </Form.Item>
    </Form>
  );
};

export default CoverForm;
