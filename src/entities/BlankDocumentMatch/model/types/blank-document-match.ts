import { Document } from "@/entities/Document";
import { Compliance } from "@prisma/client";
import { BlankDocumentMatchOnControlParameterValue } from "@/entities/BlankDocumentMatchOnControlParameterValue";

export interface BlankDocumentMatch {
  id: string;
  document?: Document;
  documentId?: string;
  compliance?: Compliance;
  controlParameterValues?: Array<BlankDocumentMatchOnControlParameterValue>;
  notes?: string;
}
