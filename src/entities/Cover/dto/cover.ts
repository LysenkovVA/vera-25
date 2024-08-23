import { CoverDesign } from "@/entities/CoverDesign";
import { CoverColor } from "@/entities/CoverColor";
import { CoverTexture } from "@/entities/CoverTexture";
import { CoverImageMethod } from "@/entities/CoverImageMethod";

export interface Cover {
  id?: string;
  coverDesign?: CoverDesign;
  coverFormat?: string;
  coverColor?: CoverColor;
  coverTexture?: CoverTexture;
  coverImageMethod?: CoverImageMethod;
  notes?: string;
}
