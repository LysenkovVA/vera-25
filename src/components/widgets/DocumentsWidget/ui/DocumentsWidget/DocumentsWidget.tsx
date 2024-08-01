"use client";
import { FileProtectOutlined } from "@ant-design/icons";
import { Card, Statistic } from "antd";
import { fetchDocumentsCountAction } from "@/app/api/documents/count/fetchDocumentsCount.action";
import { useEffect, useState } from "react";
import LoadingIndicator from "@/components/LoadingIndicator";

const DocumentsWidget = () => {
  const [count, setCount] = useState(-1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (count < 0) {
      setLoading(true);
      fetchDocumentsCountAction()
        .then((data) => setCount(data))
        .finally(() => setLoading(false));
    }
  }, [count]);

  const content = (
    <Card>
      <Statistic
        title="Документы"
        value={loading ? "-" : count}
        prefix={<FileProtectOutlined />}
      />
    </Card>
  );

  if (loading) {
    return <LoadingIndicator>{content}</LoadingIndicator>;
  }

  return content;
};

export default DocumentsWidget;
