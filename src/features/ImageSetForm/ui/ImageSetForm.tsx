"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Form, UploadFile } from "antd";
import ResearchMethodUploader from "@/features/ImageSetForm/ui/ResearchMethodsUploader/ResearchMethodUploader";
import { Image } from "@/entities/Image";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";
import {
  getResearchMethodsList,
  getResearchMethodsListError,
  getResearchMethodsListIsInitialized,
  getResearchMethodsListIsLoading,
  ResearchMethod,
} from "@/entities/ResearchMethod";
import { fetchResearchMethodsListService } from "@/entities/ResearchMethod/model/services/fetchResearchMethodsList/fetchResearchMethodsListService";
import { UploadChangeParam } from "antd/es/upload";

export interface ImageSetFormProps {
  imageResourceFormIndex: number;
}

const ImageSetForm = (props: ImageSetFormProps) => {
  const { imageResourceFormIndex } = props;

  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(getResearchMethodsListIsInitialized);
  const isLoading = useAppSelector(getResearchMethodsListIsLoading);
  const error = useAppSelector(getResearchMethodsListError);
  const researchMethods = useAppSelector(getResearchMethodsList.selectAll);

  useEffect(() => {
    if (!isInitialized && !isLoading) {
      dispatch(fetchResearchMethodsListService({ replaceData: true }));
    }
  }, [dispatch, isInitialized, isLoading]);

  const [allFiles, setAllFiles] = useState<Map<string, UploadFile<any>[]>>(
    new Map<string, UploadFile<any>[]>(),
  );

  const [allImages, setAllImages] = useState<Map<string, Image[]>>(
    new Map<string, Image[]>(),
  );

  const getFile = useCallback(
    (
      researchMethod: ResearchMethod,
      info: UploadChangeParam<UploadFile<any>>,
    ) => {
      const images: Array<Image> = [];
      info.fileList.map((file) => {
        images.push({
          id: "",
          name: file.name,
          size: file.size,
          type: file.type,
          researchMethodId: researchMethod.id,
          notes: "",
        });
      });

      allFiles.set(researchMethod.id, info.fileList);
      setAllFiles(allFiles);

      allImages.set(researchMethod.id, images);
      setAllImages(allImages);

      let allImg: Image[] = [];
      allImages.forEach((value, key) => {
        allImg.push(...value);
      });

      return allImg;
    },
    [allFiles, allImages],
  );

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {researchMethods.map((researchMethod, index) => (
        <Form.Item
          key={researchMethod.id}
          labelCol={{ span: 4 }}
          label={researchMethod.name}
          name={[imageResourceFormIndex, "imageSet"]}
          getValueFromEvent={getFile}
        >
          <ResearchMethodUploader researchMethod={researchMethod} />
        </Form.Item>
      ))}
    </>
  );
};

export default ImageSetForm;
