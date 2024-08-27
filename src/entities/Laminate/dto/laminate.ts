import { Blank } from "@/entities/Blank";
import { LaminateType } from "@/entities/LaminateType";
import { LaminateMethod } from "@/entities/LaminateMethod";

export interface Laminate {
  id: string;
  notes?: string;

  laminateType?: LaminateType;
  laminateTypeId?: string;
  laminateMethod?: LaminateMethod;
  laminateMethodId?: string;
  blank?: Blank;
  blankId?: string;
}
