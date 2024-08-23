import { CoverDto } from "@/entities/Cover";
import { BlockDto } from "@/entities/Block";
import { Country } from "@/entities/Country";
import { ManufacturerDto } from "@/entities/Manufacturer";
import { SecurityLevel } from "@/entities/SecurityLevel";
import { FasteningDto } from "@/entities/Fastening";

export interface Blank {
  id: string;
  name?: string;
  country?: Country;
  manufacturer?: ManufacturerDto;
  securityLevel?: SecurityLevel;
  covers?: Array<CoverDto>;
  blocks?: Array<BlockDto>;
  fastenings?: Array<FasteningDto>;
  notes?: string;
}
