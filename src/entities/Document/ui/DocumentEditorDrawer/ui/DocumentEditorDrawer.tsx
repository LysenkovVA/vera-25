"use client";
import { useCallback } from "react";
import DrawerWrapper from "@/shared/UI/DrawerWrapper/DrawerWrapper";
import { Button, DrawerProps, Flex, Form, Typography } from "antd";
import { Document, DocumentForm } from "@/entities/Document";
import useMessage from "antd/es/message/useMessage";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import { getDocumentDetailsFormData } from "@/entities/Document/model/selectors/document.selectors";
import { documentSliceActions } from "@/entities/Document/model/slice/documentSlice";
import { ValidateErrorEntity } from "rc-field-form/es/interface";
import { createDocumentService } from "@/entities/Document/model/services/createDocument.service";
import { updateDocumentService } from "@/entities/Document/model/services/updateDocument.service";

export interface DocumentEditorDrawerProps
  extends Omit<DrawerProps, "children" | "onClose"> {
  onClose?: () => void;
}

const DocumentEditorDrawer = (props: DocumentEditorDrawerProps) => {
  const { onClose, ...restProps } = props;
  const [messageApi, contextHolder] = useMessage();
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();
  const documentFormData = useAppSelector(getDocumentDetailsFormData);

  const onFieldsChanged = useCallback(
    (document: Document) => {
      dispatch(documentSliceActions.setFormData(document));
    },
    [dispatch],
  );

  const onSaveClick = useCallback(() => {
    console.log("Submitting form...");
    form.submit();
  }, []);

  const onFinish = useCallback(() => {
    console.log("Saving data...");

    if (documentFormData) {
      if (!documentFormData.id) {
        dispatch(createDocumentService({ document: documentFormData })).then(
          (result) => {
            if (result.payload) {
              onClose?.();
            }
          },
        );
      } else {
        dispatch(updateDocumentService({ document: documentFormData })).then(
          (result) => {
            if (result.payload) {
              onClose?.();
            }
          },
        );
      }
    }
  }, [documentFormData, dispatch, onClose]);

  const onFinishFailed = useCallback((errorInfo: ValidateErrorEntity<any>) => {
    console.log("refuse save data...");
  }, []);

  const extraContent = (
    <Flex gap={8}>
      <Button
        icon={<CloseOutlined />}
        type={"primary"}
        danger
        onClick={(e) => {
          onClose?.();
        }}
      >
        {"Закрыть"}
      </Button>
      <Button icon={<SaveOutlined />} type={"primary"} onClick={onSaveClick}>
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
        <DocumentForm
          onFieldsChange={onFieldsChanged}
          initialValue={documentFormData}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        />
      </DrawerWrapper>
    </>
  );
};

export default DocumentEditorDrawer;
