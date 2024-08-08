import { CoverDto } from "@/entities/Cover";

export interface BlankDto {
  id?: string;
  name?: string;
  cover?: Array<CoverDto>;
}
