"use client";
import { useCallback, useState } from "react";
import DrawerWrapper from "@/shared/UI/DrawerWrapper/DrawerWrapper";
import { Button, DrawerProps, message, Steps, theme } from "antd";
import { createBlankAction } from "@/app/api/blanks/create/createBlank.action";
import { Blank, BlankForm } from "@/entities/Blank";
import { FieldData } from "rc-field-form/es/interface";

export interface BlankEditorDrawerProps extends Omit<DrawerProps, "children"> {}

const BlankEditorDrawer = (props: BlankEditorDrawerProps) => {
  const { onClose, ...restProps } = props;

  const [current, setCurrent] = useState(0);
  const { token } = theme.useToken();

  const [data, setData] = useState<Blank>({ id: "" });

  const onFieldsChanged = useCallback(
    (changedFields: FieldData[], allFields: FieldData[]) => {
      changedFields.map((field: FieldData) => {
        const newData: Blank = {
          ...data,
          [field.name]: field.value,
        };

        setData(newData);
      });
    },
    [data],
  );

  // message.info(JSON.stringify(data));

  const steps = [
    {
      title: "Внешний вид, конструкция и реквизиты",
      description: "",
      content: <BlankForm onFieldsChange={onFieldsChanged} />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    description: item.description,
  }));

  const contentStyle: React.CSSProperties = {
    // lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <DrawerWrapper {...restProps} onClose={onClose}>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Далее
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={(e) => {
              createBlankAction(data)
                .then((result) => {
                  message.success("Данные сохранены!");
                  onClose?.(e);
                })
                .catch((error) => message.error(error));
            }}
          >
            Готово
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Назад
          </Button>
        )}
      </div>
    </DrawerWrapper>
  );
};

export default BlankEditorDrawer;
