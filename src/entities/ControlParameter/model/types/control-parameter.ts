import { ControlParameterValue } from "@/entities/ControlParameterValue";

export interface ControlParameter {
  id: string;
  name: string;
  position?: number;
  notes?: string;
  controlParameterValues?: Array<ControlParameterValue>;
}
