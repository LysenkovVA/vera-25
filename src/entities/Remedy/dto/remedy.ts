import { ImageSet } from "@/entities/ImageSet";
import { RemedyVariety } from "@/entities/RemedyVariety";

export interface Remedy {
  id: string;

  remedyVariety?: RemedyVariety;
  remedyVarietyId?: string;

  imageSet?: ImageSet;
  imageSetId?: string;
}
