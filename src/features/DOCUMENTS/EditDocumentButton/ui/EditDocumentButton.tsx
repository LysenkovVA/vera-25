"use client";
import React, { useState } from "react";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { DocumentEditorDrawer } from "@/entities/Document";
import { useAppDispatch } from "@/shared/lib/hooks/storeHooks";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { documentSliceReducer } from "@/entities/Document/model/slice/documentSlice";
import { fetchDocumentByIdService } from "@/entities/Document/model/services/fetchDocumentById.service";

export interface EditDocumentButtonProps {
  documentId: string;
}

const EditDocumentButton = (props: EditDocumentButtonProps) => {
  const reducers: ReducersList = {
    documentDetails: documentSliceReducer,
  };

  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  return (
    <>
      <Button
        type={"link"}
        icon={<EditOutlined style={{ color: "orange" }} />}
        onClick={() => {
          setOpen(true);
          dispatch(fetchDocumentByIdService({ id: props.documentId }));
        }}
      />
      {/*  TODO модуль не подгружается динамически когда идет клик, подумать над логикой! */}
      {open && (
        <DynamicModuleLoader reducers={reducers}>
          <DocumentEditorDrawer
            closable={false}
            height={"90%"}
            placement="bottom"
            open={open}
            onClose={() => setOpen(false)}
          />
        </DynamicModuleLoader>
      )}
    </>
  );
};

export default EditDocumentButton;
