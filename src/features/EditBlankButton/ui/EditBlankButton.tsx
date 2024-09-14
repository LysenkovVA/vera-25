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

const reducers: ReducersList = {
  blankDetails: blankSliceReducer,
};

export interface EditBlankButtonProps {
  blankId: string;
}

const EditBlankButton = (props: EditBlankButtonProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  return (
    <>
      <Button
        type={"link"}
        icon={<EditOutlined />}
        onClick={() => {
          dispatch(fetchBlankByIdService({ id: props.blankId }));
          setOpen(true);
        }}
      />
      {open ? (
        <DynamicModuleLoader reducers={reducers}>
          <BlankEditorDrawer
            blankId={props.blankId}
            closable={false}
            destroyOnClose
            // title={<p>{props.blankId}</p>}
            height={"90%"}
            placement="bottom"
            open={open}
            onClose={() => setOpen(false)}
          />
        </DynamicModuleLoader>
      ) : null}
    </>
  );
};

export default EditBlankButton;
