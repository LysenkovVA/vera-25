"use client";
import { useCallback } from "react";
import DrawerWrapper from "@/shared/UI/DrawerWrapper/DrawerWrapper";
import { Button, DrawerProps, Flex, Typography } from "antd";
import { Document, DocumentForm } from "@/entities/Document";
import useMessage from "antd/es/message/useMessage";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import LoadingIndicator from "@/shared/UI/LoadingIndicator";
import {
  getDocumentDetailsFormData,
  getDocumentIsLoading,
} from "@/entities/Document/model/selectors/document.selectors";
import { documentSliceActions } from "@/entities/Document/model/slice/documentSlice";

export interface DocumentEditorDrawerProps
  extends Omit<DrawerProps, "children"> {}

const DocumentEditorDrawer = (props: DocumentEditorDrawerProps) => {
  const { onClose, ...restProps } = props;
  const [messageApi, contextHolder] = useMessage();

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getDocumentIsLoading);
  const documentFormData = useAppSelector(getDocumentDetailsFormData);

  const onFieldsChanged = useCallback(
    (document: Document) => {
      dispatch(documentSliceActions.setFormData(document));
    },
    [dispatch],
  );

  const onSave = useCallback(
    async (e: any) => {
      try {
        if (documentFormData) {
          // dispatch(upsertDocumentService({ document: documentFormData })).then(
          //     (result) => {
          //         if (result.payload) {
          //             messageApi.success(
          //                 <Flex gap={4}>
          //                     <Typography.Text>{"Информация сохранена!"}</Typography.Text>
          //                 </Flex>,
          //             );
          //             onClose?.(e);
          //         }
          //     },
          // );
        }
      } catch (error) {
        messageApi.error(error as string);
      }
    },
    [documentFormData, dispatch, messageApi, onClose],
  );

  const extraContent = (
    <Flex gap={8}>
      <Button
        icon={<CloseOutlined />}
        type={"primary"}
        danger
        onClick={(e) => {
          onClose?.(e);
        }}
      >
        {"Закрыть"}
      </Button>
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
                {!documentFormData?.name
                  ? "Без названия"
                  : documentFormData?.name}
              </Typography.Text>
              {documentFormData?.id ? (
                <Typography.Text type={"secondary"} style={{ fontSize: 10 }}>
                  {`ID=${documentFormData?.id}`}
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
          <DocumentForm
            onFieldsChange={onFieldsChanged}
            initialValue={documentFormData}
          />
        )}
      </DrawerWrapper>
    </>
  );
};

export default DocumentEditorDrawer;
