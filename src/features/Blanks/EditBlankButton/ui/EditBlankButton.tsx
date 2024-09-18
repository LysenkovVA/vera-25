"use client";
import React, { useState } from "react";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { BlankEditorDrawer, blankSliceReducer } from "@/entities/Blank";
import { fetchBlankByIdService } from "@/entities/Blank/model/services/fetchBlank.service";
import { useAppDispatch } from "@/shared/lib/hooks/storeHooks";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface EditBlankButtonProps {
  blankId: string;
}

const EditBlankButton = (props: EditBlankButtonProps) => {
  const reducers: ReducersList = {
    blankDetails: blankSliceReducer,
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
          dispatch(fetchBlankByIdService({ id: props.blankId }));
        }}
      />
      {/*  TODO модуль не подгружается динамически когда идет клик, подумать над логикой! */}
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

export default EditBlankButton;
