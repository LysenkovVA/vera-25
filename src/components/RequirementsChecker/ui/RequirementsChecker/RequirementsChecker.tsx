import React, { useState } from "react";
import { theme } from "antd";
import DocumentsContent from "@/components/RequirementsChecker/ui/DocumentsContent/DocumentsContent";
import { DocumentDto } from "@/dto/document.dto";
import DocumentGroupsContent from "@/components/RequirementsChecker/ui/DocumentGroupsContent/DocumentGroupsContent";

const RequirementsChecker = () => {
  const [selectedDocument, setSelectedDocument] = useState<DocumentDto>();

  const { token } = theme.useToken();

  // const contentStyle: React.CSSProperties = {
  //   lineHeight: "260px",
  //   textAlign: "center",
  //   color: token.colorTextTertiary,
  //   backgroundColor: token.colorFillAlter,
  //   borderRadius: token.borderRadiusLG,
  //   border: `1px dashed ${token.colorBorder}`,
  //   marginTop: 16,
  // };

  // const steps = [
  //   {
  //     title: "Выберите документ",
  //     description: "",
  //     content: (
  //       <DocumentsContent
  //         onSelectDocument={(doc) => setSelectedDocument(doc)}
  //       />
  //     ),
  //   },
  // ];
  //
  // const items = steps.map((item) => ({
  //   key: item.title,
  //   title: item.title,
  //   description: item.description,
  // }));

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
