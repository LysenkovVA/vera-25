"use client";
import { useCallback } from "react";
import DrawerWrapper from "@/shared/UI/DrawerWrapper/DrawerWrapper";
import { Button, DrawerProps, Flex, Typography } from "antd";
import {
  Blank,
  BlankForm,
  blankSliceActions,
  getBlankDetailsFormData,
  getBlankIsLoading,
} from "@/entities/Blank";
import useMessage from "antd/es/message/useMessage";
import { upsertBlankService } from "@/entities/Blank/model/services/upsertBlankService";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import LoadingIndicator from "@/shared/UI/LoadingIndicator";

export interface BlankEditorDrawerProps extends Omit<DrawerProps, "children"> {
  // blankId?: string;
}

const BlankEditorDrawer = (props: BlankEditorDrawerProps) => {
  const { onClose, ...restProps } = props;
  const [messageApi, contextHolder] = useMessage();

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getBlankIsLoading);
  const blankFormData = useAppSelector(getBlankDetailsFormData);

  const onFieldsChanged = useCallback(
    (blank: Blank) => {
      dispatch(blankSliceActions.setFormData(blank));
    },
    [dispatch],
  );

  const onSave = useCallback(
    async (e: any) => {
      try {
        if (blankFormData) {
          dispatch(upsertBlankService({ blank: blankFormData })).then(
            (result) => {
              if (result.payload) {
                messageApi.success(
                  <Flex gap={4}>
                    <Typography.Text>{"Информация сохранена!"}</Typography.Text>
                  </Flex>,
                );
                onClose?.(e);
              }
            },
          );
        }
      } catch (error) {
        messageApi.error(error as string);
      }
    },
    [blankFormData, dispatch, messageApi, onClose],
  );

  const extraContent = (
    <Flex gap={8}>
      <Button
        icon={<CloseOutlined />}
        danger
        onClick={(e) => {
          onClose?.(e);
        }}
      />
      <Button icon={<SaveOutlined />} type={"primary"} onClick={onSave}>
        {"Сохранить"}
      </Button>
    </Flex>
  );

  return (
    <>
      {contextHolder}
      <DrawerWrapper
        title={
          <Flex gap={8}>
            <Flex vertical>
              <Typography.Text style={{ color: "saddlebrown", fontSize: 20 }}>
                {!blankFormData?.name ? "Без названия" : blankFormData?.name}
              </Typography.Text>
              {blankFormData?.id ? (
                <Typography.Text type={"secondary"} style={{ fontSize: 10 }}>
                  {`ID=${blankFormData?.id}`}
                </Typography.Text>
              ) : null}
            </Flex>
          </Flex>
        }
        {...restProps}
        onClose={onClose}
        extra={extraContent}
        // destroyOnClose={true}
      >
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <BlankForm
            onFieldsChange={onFieldsChanged}
            initialValue={blankFormData}
          />
        )}
      </DrawerWrapper>
    </>
  );
};

export default BlankEditorDrawer;
