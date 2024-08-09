import { BlockDesignDto } from "@/entities/BlockDesign";
import { BlockCornersDesignDto } from "@/entities/BlockCornersDesign";
import { BlockPagesMaterialDto } from "@/entities/BlockPagesMaterial";

export interface BlockDto {
  id?: string;
  blockDesign?: BlockDesignDto;
  blockFormat?: string;
  blockCornersDesign?: BlockCornersDesignDto;
  blockPagesMaterial?: BlockPagesMaterialDto;
  pagesInBlock?: string;
  pagesNumbered?: string;
  hasEndPapers?: boolean;
  notes?: string;
}
