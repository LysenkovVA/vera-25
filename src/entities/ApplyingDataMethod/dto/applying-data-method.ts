import { Blank } from "@/entities/Blank";

export interface ApplyingDataMethod {
  id: string;
  name: string;
  notes?: string;

  blanks?: Array<Blank>;
}
