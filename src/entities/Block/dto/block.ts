import { BlockDesign } from "@/entities/BlockDesign";
import { BlockCornersDesign } from "@/entities/BlockCornersDesign";
import { BlockPagesMaterial } from "@/entities/BlockPagesMaterial";

export interface Block {
  id: string;
  blockDesign?: BlockDesign;
  blockFormat?: string;
  blockCornersDesign?: BlockCornersDesign;
  blockPagesMaterial?: BlockPagesMaterial;
  pagesInBlock?: string;
  pagesNumbered?: string;
  hasEndPapers?: boolean;
  notes?: string;
}
