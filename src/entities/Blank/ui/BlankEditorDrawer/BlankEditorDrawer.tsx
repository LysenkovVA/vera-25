"use client";
import { useCallback, useState } from "react";
import DrawerWrapper from "@/shared/UI/DrawerWrapper/DrawerWrapper";
import { Button, DrawerProps, Flex } from "antd";
import { Blank, BlankForm } from "@/entities/Blank";
import useMessage from "antd/es/message/useMessage";
import { createBlankService } from "@/entities/Blank/model/services/createBlank.service";
import { useAppDispatch } from "@/shared/lib/hooks/storeHooks";

export interface BlankEditorDrawerProps extends Omit<DrawerProps, "children"> {}

const BlankEditorDrawer = (props: BlankEditorDrawerProps) => {
  const [messageApi, contextHolder] = useMessage();

  const { onClose, ...restProps } = props;

  const [data, setData] = useState<Blank>({ id: "" });

  const dispatch = useAppDispatch();

  const onFieldsChanged = useCallback((blank: Blank) => {
    setData(blank);
  }, []);

  // const onFieldsChanged = useCallback(
  //   (changedFields: FieldData[], allFields: FieldData[]) => {
  //     changedFields.map((field: FieldData) => {
  //       const newData: Blank = {
  //         ...data,
  //         [field.name]: field.value,
  //       };
  //
  //       setData(newData);
  //     });
  //   },
  //   [data],
  // );

  const extraContent = (
    <Flex gap={8}>
      <Button
        danger
        onClick={(e) => {
          onClose?.(e);
        }}
      >
        {"Отмена"}
      </Button>
      <Button
        type={"default"}
        onClick={(e) => {
          try {
            if (!data.id) {
              dispatch(createBlankService({ blank: data }));
              messageApi.success(`'${data.name}' сохранен!`);
            } else {
              messageApi.info("Логика по редактированию в разработке...");
            }

            onClose?.(e);
          } catch (error) {
            messageApi.error(error as string);
          }
        }}
      >
        {"Сохранить"}
      </Button>
    </Flex>
  );

  return (
    <>
      {contextHolder}
      <DrawerWrapper {...restProps} onClose={onClose} extra={extraContent}>
        <BlankForm onFieldsChange={onFieldsChanged} />
      </DrawerWrapper>
    </>
  );
};

export default BlankEditorDrawer;
