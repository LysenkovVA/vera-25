import React, { useCallback, useState } from "react";
import { Card, Form, Input } from "antd";
import { DocumentSelector } from "@/features/DOCUMENTS/DocumentsSelector";
import { ControlParameterValueSelector } from "@/entities/ControlParameterValue/ui/ControlParameterValueSelector";
import { ComplianceSelector } from "@/features/ComplienceSelector";
import { fetchDocumentByIdService } from "@/entities/Document/model/services/fetchDocumentByIdService";
import { useAppDispatch } from "@/shared/lib/hooks/storeHooks";
import { Document } from "@/entities/Document";

export interface BlankDocumentCardProps {
  name: number;
}

interface NumberDocument {
  name: number;
  id: string;
}

const BlankDocumentCard = (props: BlankDocumentCardProps) => {
  const dispatch = useAppDispatch();

  const [document, setDocument] = useState<Document | undefined>(undefined);

  const onChangeDocument = useCallback(
    async (documentId: string | undefined) => {
      if (documentId) {
        const doc = await dispatch(
          fetchDocumentByIdService({ id: documentId }),
        ).unwrap();

        setDocument(doc);
      } else {
        setDocument(undefined);
      }
    },
    [dispatch],
  );

  return (
    <Card style={{ marginBottom: 8, width: "100%" }}>
      <>
        <Form.Item
          labelCol={{ span: 4 }}
          label={"Документ"}
          name={[props.name, "document", "id"]}
          rules={[{ required: true, message: "Не указано" }]}
        >
          <DocumentSelector
            placeholder={"Укажите документ"}
            onChange={(value) => onChangeDocument(value)}
          />
        </Form.Item>
        {document?.controlParameters?.map((cp, index) => (
          <Form.Item
            key={cp.id}
            labelCol={{ span: 4 }}
            label={cp.name}
            name={[props.name, "controlParameterValues", index, "id"]}
          >
            <ControlParameterValueSelector controlParameterId={cp.id} />
          </Form.Item>
        ))}
        <Form.Item
          labelCol={{ span: 4 }}
          label={"Соответствие"}
          name={[props.name, "compliance"]}
          rules={[{ required: true, message: "Не указано" }]}
        >
          <ComplianceSelector placeholder={"Укажите соответствие"} />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 4 }}
          label={"Примечания"}
          name={[props.name, "notes"]}
        >
          <Input.TextArea
            placeholder={"Укажите примечания"}
            autoSize={{ minRows: 3, maxRows: 3 }}
          />
        </Form.Item>
      </>
    </Card>
  );
};

export default BlankDocumentCard;
