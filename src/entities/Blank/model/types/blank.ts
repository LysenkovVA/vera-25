import { Cover } from "@/entities/Cover";
import { Block } from "@/entities/Block";
import { Country } from "@/entities/Country";
import { Manufacturer } from "@/entities/Manufacturer";
import { SecurityLevel } from "@/entities/SecurityLevel";
import { Fastening } from "@/entities/Fastening";
import { Detail } from "@/entities/Detail";
import { ImageResource } from "@/entities/ImageResource";
import { Laminate } from "@/entities/Laminate";
import { ApplyingDataMethod } from "@/entities/ApplyingDataMethod";
import { BlankType } from "@/entities/BlankType";

export interface Blank {
  id: string;
  name?: string;
  blankType?: BlankType;
  blankTypeId?: string;
  country?: Country;
  countryId?: string;
  manufacturer?: Manufacturer;
  manufacturerId?: string;
  securityLevel?: SecurityLevel;
  securityLevelId?: string;
  covers?: Array<Cover>;
  blocks?: Array<Block>;
  fastenings?: Array<Fastening>;
  details?: Array<Detail>;
  pagesCount?: number;
  laminates?: Array<Laminate>;
  personalizationDataContents?: string;
  applyingDataMethod?: ApplyingDataMethod;
  applyingDataMethodId?: string;
  imageResources?: Array<ImageResource>;
  notes?: string;
}
