import { CoverDto } from "@/entities/Cover";
import { BlockDto } from "@/entities/Block";
import { CountryDto } from "@/entities/Country";
import { ManufacturerDto } from "@/entities/Manufacturer";
import { SecurityLevelDto } from "@/entities/SecurityLevel";
import { FasteningDto } from "@/entities/Fastening";

export interface BlankDto {
  id?: string;
  name?: string;
  country?: CountryDto;
  manufacturer?: ManufacturerDto;
  securityLevel?: SecurityLevelDto;
  covers?: Array<CoverDto>;
  blocks?: Array<BlockDto>;
  fastenings?: Array<FasteningDto>;
  notes?: string;
}
