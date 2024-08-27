import { Laminate } from "@/entities/Laminate";

export interface LaminateMethod {
  id: string;
  name: string;
  notes?: string;

  laminates: Array<Laminate>;
}
