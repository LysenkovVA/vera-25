import { BlankDocumentMatchOnControlParameterValue } from "@/entities/BlankDocumentMatchOnControlParameterValue";

export interface ControlParameterValue {
  id: string;
  name: string;
  position?: number;
  notes?: string;
  blankDocumentMatches?: Array<BlankDocumentMatchOnControlParameterValue>;
}
