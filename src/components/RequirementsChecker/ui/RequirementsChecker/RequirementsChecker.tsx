import React, { useState } from "react";
import DocumentsContent from "@/components/RequirementsChecker/ui/DocumentsContent/DocumentsContent";
import { Document } from "@/entities/Document";
import DocumentGroupsContent from "@/components/RequirementsChecker/ui/DocumentGroupsContent/DocumentGroupsContent";

const RequirementsChecker = () => {
  const [selectedDocument, setSelectedDocument] = useState<Document>();

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
