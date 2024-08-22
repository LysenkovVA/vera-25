"use client";
import { useCallback, useState } from "react";
import DrawerWrapper from "@/shared/UI/DrawerWrapper/DrawerWrapper";
import { Button, DrawerProps, Steps, theme } from "antd";
import { Blank, BlankForm } from "@/entities/Blank";
import { FieldData } from "rc-field-form/es/interface";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { createBlankService } from "@/entities/Blank/model/services/createBlank.service";
import useMessage from "antd/es/message/useMessage";

export interface BlankEditorDrawerProps extends Omit<DrawerProps, "children"> {}

const BlankEditorDrawer = (props: BlankEditorDrawerProps) => {
  const [messageApi, contextHolder] = useMessage();

  const { onClose, ...restProps } = props;

  const [current, setCurrent] = useState(0);
  const { token } = theme.useToken();

  const [data, setData] = useState<Blank>({ id: "" });

  const dispatch = useAppDispatch();

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
    <>
      {contextHolder}
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
                try {
                  dispatch(createBlankService({ blank: data }));
                  messageApi.success(`'${data.name}' сохранен!`);
                  onClose?.(e);
                } catch (error) {
                  messageApi.error(error as string);
                }
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
    </>
  );
};

export default BlankEditorDrawer;
