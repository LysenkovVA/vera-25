"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchDocumentByIdAction } from "@/app/api/documents/[id]/fetchDocumentById.action";
import { DocumentDto } from "@/dto/document.dto";
import { Button, Flex, Space, Steps } from "antd";
import DocumentRequirementContent from "@/components/RequirementsChecker/ui/DocumentRequirementContent/DocumentRequirementContent";
import LoadingIndicator from "@/components/LoadingIndicator";

export interface DocumentGroupsContentProps {
  documentId: string;
}

const DocumentGroupsContent = (props: DocumentGroupsContentProps) => {
  const { documentId } = props;

  const [currentGroup, setCurrentGroup] = useState(0);
  const [document, setDocument] = useState<DocumentDto>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!document && documentId) {
      setLoading(true);
      fetchDocumentByIdAction(documentId)
        .then((data) => {
          setDocument(data);
        })
        .finally(() => setLoading(false));
    }
  }, [document, documentId]);

  const onChange = useCallback((value: number) => {
    setCurrentGroup(value);
  }, []);

  const onFinished = useCallback(() => {
    setCurrentGroup(currentGroup + 1);
  }, [currentGroup]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <Flex style={{ width: "100%" }} gap={16}>
      <Steps
        items={document?.requirementGroups?.map((item) => {
          return { title: item.name };
        })}
        current={currentGroup}
        size={"small"}
        direction={"vertical"}
        onChange={onChange}
      />
      <DocumentRequirementContent
        documentGroup={document?.requirementGroups?.[currentGroup]}
        onFinished={onFinished}
      />
    </Flex>
  );
};

export default DocumentGroupsContent;
