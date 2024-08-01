// "use client";
import { DocumentDto } from "@/dto/document.dto";
import { Button, Flex, Result, Spin } from "antd";
import { fetchDocumentsAction } from "@/app/api/documents/fetchDocuments.action";
import { useEffect, useState } from "react";
import styles from "./DocumentsContent.module.scss";
import LoadingIndicator from "@/components/LoadingIndicator";

export interface DocumentsContentProps {
  onSelectDocument?: (doc: DocumentDto) => void;
}

const DocumentsContent = (props: DocumentsContentProps) => {
  const { onSelectDocument } = props;
  const [documents, setDocuments] = useState<DocumentDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!documents || !documents.length) {
      setLoading(true);
      fetchDocumentsAction()
        .then<DocumentDto[]>((data: DocumentDto[]) => {
          setDocuments(data);
          return data;
        })
        .finally(() => setLoading(false));
    }
  }, [documents]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (documents.length === 0) {
    return (
      <Result
        status={"info"}
        title={"Документов не найдено"}
        extra={<Button type="primary">Добавить</Button>}
      />
    );
  }

  return (
    <div className={styles.DocumentsContent}>
      <Flex vertical gap={8}>
        {documents.map((doc) => (
          <Button
            key={doc.id}
            type={"primary"}
            onClick={() => onSelectDocument?.(doc)}
          >
            {`${doc.number}`}
          </Button>
        ))}
      </Flex>
    </div>
  );
};

export default DocumentsContent;
