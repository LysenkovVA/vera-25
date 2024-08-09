import { CoverDesignDto } from "@/entities/CoverDesign";
import { CoverColorDto } from "@/entities/CoverColor";
import { CoverTextureDto } from "@/entities/CoverTexture";
import { CoverImageMethodDto } from "@/entities/CoverImageMethod";

export interface CoverDto {
  id?: string;
  coverDesign?: CoverDesignDto;
  coverFormat?: string;
  coverColor?: CoverColorDto;
  coverTexture?: CoverTextureDto;
  coverImageMethod?: CoverImageMethodDto;
  notes?: string;
}
