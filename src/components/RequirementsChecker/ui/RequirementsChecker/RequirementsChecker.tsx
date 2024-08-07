import React, { useState } from "react";
import { theme } from "antd";
import DocumentsContent from "@/components/RequirementsChecker/ui/DocumentsContent/DocumentsContent";
import { DocumentDto } from "@/entities/Document/dto/document.dto";
import DocumentGroupsContent from "@/components/RequirementsChecker/ui/DocumentGroupsContent/DocumentGroupsContent";

const RequirementsChecker = () => {
  const [selectedDocument, setSelectedDocument] = useState<DocumentDto>();

  return (
    <>
      {!selectedDocument?.id ? (
        <DocumentsContent
          onSelectDocument={(doc) => setSelectedDocument(doc)}
        />
      ) : (
        <DocumentGroupsContent documentId={selectedDocument?.id} />
      )}
    </>
  );
};

export default RequirementsChecker;
