import { Cover } from "@/entities/Cover";
import { Block } from "@/entities/Block";
import { Country } from "@/entities/Country";
import { Manufacturer } from "@/entities/Manufacturer";
import { SecurityLevel } from "@/entities/SecurityLevel";
import { FasteningDto } from "@/entities/Fastening";

export interface Blank {
  id: string;
  name?: string;
  country?: Country;
  countryId?: string;
  manufacturer?: Manufacturer;
  manufacturerId?: string;
  securityLevel?: SecurityLevel;
  securityLevelId?: string;
  covers?: Array<Cover>;
  blocks?: Array<Block>;
  fastenings?: Array<FasteningDto>;
  notes?: string;
}
