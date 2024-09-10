"use client";

import { ResearchMethod } from "@/entities/ResearchMethod";
import React, { useState } from "react";
import { Upload, UploadFile } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/es/upload";

export interface ResearchMethodUploaderProps {
  researchMethod: ResearchMethod;
  onChange?: (
    researchMethod: ResearchMethod,
    info: UploadChangeParam<UploadFile<any>> | undefined,
  ) => void;
}

const ResearchMethodUploader = (props: ResearchMethodUploaderProps) => {
  const { researchMethod, onChange } = props;

  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);

  return (
    <Upload
      listType={"picture-card"}
      fileList={fileList}
      onChange={(info) => {
        setFileList(info.fileList);
        onChange?.(researchMethod, info);
      }}
    >
      <PlusOutlined />
    </Upload>
  );
};

export default ResearchMethodUploader;
