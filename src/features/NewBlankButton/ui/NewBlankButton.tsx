import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import { BlankEditorDrawer, blankSliceReducer } from "@/entities/Blank";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const NewBlankButton = () => {
  const reducers: ReducersList = {
    blankDetails: blankSliceReducer,
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
          <BlankEditorDrawer
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

export default NewBlankButton;
