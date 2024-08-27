import { Laminate } from "@/entities/Laminate";

export interface LaminateType {
  id: string;
  name: string;
  notes?: string;

  laminates: Array<Laminate>;
}
