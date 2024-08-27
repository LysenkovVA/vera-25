import { Remedy } from "@/entities/Remedy";

export interface RemedyVariety {
  id: string;
  name: string;
  remedies?: Array<Remedy>;
}
