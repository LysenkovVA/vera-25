import React, { useState } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { documentSliceReducer } from "@/entities/Document/model/slice/documentSlice";
import { DocumentEditorDrawer } from "@/entities/Document";

const AddDocumentButton = () => {
  const reducers: ReducersList = {
    documentDetails: documentSliceReducer,
  };

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        type={"primary"}
        icon={<PlusCircleOutlined />}
        onClick={() => setOpen(true)}
      >
        Добавить
      </Button>
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

export default AddDocumentButton;
