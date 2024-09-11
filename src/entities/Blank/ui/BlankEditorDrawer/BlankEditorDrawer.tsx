"use client";
import { useCallback } from "react";
import DrawerWrapper from "@/shared/UI/DrawerWrapper/DrawerWrapper";
import { Button, DrawerProps, Flex, Typography } from "antd";
import {
  Blank,
  BlankForm,
  blankSliceActions,
  getBlankDetails,
  getBlankDetailsFormData,
  getBlankIsLoading,
} from "@/entities/Blank";
import useMessage from "antd/es/message/useMessage";
import { upsertBlankService } from "@/entities/Blank/model/services/upsertBlankService";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import LoadingIndicator from "@/shared/UI/LoadingIndicator";

export interface BlankEditorDrawerProps extends Omit<DrawerProps, "children"> {
  blankId?: string;
}

const BlankEditorDrawer = (props: BlankEditorDrawerProps) => {
  const { blankId, onClose, ...restProps } = props;
  const [messageApi, contextHolder] = useMessage();

  const dispatch = useAppDispatch();
  // const isInitialized = useAppSelector(getBlankIsInitialized);
  const isLoading = useAppSelector(getBlankIsLoading);
  const blankDetails = useAppSelector(getBlankDetails);
  const blankFormData = useAppSelector(getBlankDetailsFormData);

  // useEffect(() => {
  //   if (!isInitialized && !isLoading) {
  //     dispatch(fetchBlankByIdService({ id: blankId! }));
  //   }
  // }, [blankId, dispatch, isInitialized, isLoading]);

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
          messageApi.info("Sending to service blank id=" + blankFormData?.id);
          dispatch(upsertBlankService({ blank: blankFormData })).then(
            (result) => {
              if (result.payload) {
                messageApi.success(`'${blankFormData.name}' сохранен!`);
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

  if (isLoading) {
    return <LoadingIndicator />;
  }

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
      <Button type={"default"} onClick={onSave}>
        {"Сохранить"}
      </Button>
    </Flex>
  );

  return (
    <>
      {contextHolder}
      <DrawerWrapper
        title={
          <Flex vertical>
            <Typography.Text style={{ color: "saddlebrown", fontSize: 20 }}>
              {blankFormData?.name}
            </Typography.Text>
            {blankFormData?.id ? (
              <Typography.Text type={"secondary"} style={{ fontSize: 10 }}>
                {`ID=${blankFormData?.id}`}
              </Typography.Text>
            ) : null}
          </Flex>
        }
        {...restProps}
        onClose={onClose}
        extra={extraContent}
      >
        <BlankForm
          onFieldsChange={onFieldsChanged}
          initialValue={blankDetails}
        />
      </DrawerWrapper>
    </>
  );
};

export default BlankEditorDrawer;
