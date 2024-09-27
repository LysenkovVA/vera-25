"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchDocumentByIdAction } from "@/app/api/documents/[id]/fetchDocumentById.action";
import { Document } from "@/entities/Document";
import { Card, Flex } from "antd";
import LoadingIndicator from "@/shared/UI/LoadingIndicator";

export interface DocumentGroupsContentProps {
  documentId: string;
}

const DocumentGroupsContent = (props: DocumentGroupsContentProps) => {
  const { documentId } = props;

  const [currentGroup, setCurrentGroup] = useState(0);
  const [document, setDocument] = useState<Document>();
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
    <Flex style={{ width: "100%", padding: "0px" }} gap={2}>
      <Card style={{ minWidth: "15%", maxWidth: "15%" }}>
        {/*<Steps*/}
        {/*  items={document?.requirementGroups?.map((item) => {*/}
        {/*    return { title: item.name };*/}
        {/*  })}*/}
        {/*  current={currentGroup}*/}
        {/*  size={"small"}*/}
        {/*  direction={"vertical"}*/}
        {/*  onChange={onChange}*/}
        {/*/>*/}
      </Card>
      <Card style={{ minWidth: "85%", maxWidth: "85%" }}>
        {/*<DocumentRequirementContent*/}
        {/*  documentGroup={document?.requirementGroups?.[currentGroup]}*/}
        {/*  onFinished={onFinished}*/}
        {/*/>*/}
      </Card>
    </Flex>
  );
};

export default DocumentGroupsContent;
