import { BlankDocumentMatch } from "@/entities/BlankDocumentMatch";
import { ControlParameterValue } from "@/entities/ControlParameterValue";

export interface BlankDocumentMatchOnControlParameterValue {
  blankDocumentMatchId: string;
  blankDocumentMatch: BlankDocumentMatch;
  controlParameterValueId: string;
  controlParameterValue: ControlParameterValue;
}
