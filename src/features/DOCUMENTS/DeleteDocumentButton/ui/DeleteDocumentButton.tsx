"use client";
import React, { useCallback, useState } from "react";
import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/shared/lib/hooks/storeHooks";
import { deleteDocumentService } from "@/entities/Document/model/services/deleteDocument.service";

export interface DeleteDocumentButtonProps {
  documentId: string;
}

const DeleteDocumentButton = (props: DeleteDocumentButtonProps) => {
  const { documentId } = props;

  const [modal2Open, setModal2Open] = useState(false);

  const dispatch = useAppDispatch();

  const onOk = useCallback(() => {
    dispatch(deleteDocumentService({ documentId: documentId }));
  }, [documentId, dispatch]);

  return (
    <>
      <Button
        type={"link"}
        icon={<DeleteOutlined style={{ color: "red" }} />}
        onClick={() => setModal2Open(true)}
      />
      <Modal
        title="Удаление?"
        centered
        open={modal2Open}
        onOk={() => {
          setModal2Open(false);
          onOk();
        }}
        onCancel={() => setModal2Open(false)}
      >
        <p>Вы действительно хотите удалить документ?</p>
      </Modal>
    </>
  );
};

export default DeleteDocumentButton;
