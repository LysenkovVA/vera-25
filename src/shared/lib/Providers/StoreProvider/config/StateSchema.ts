import { BlanksListSchema } from "@/features/Blanks/BlanksList/model/types/blanksList.schema";
import { BlankSchema } from "@/entities/Blank";
import { SecurityLevelsListSchema } from "@/features/SecurityLevelSelector";
import { CountriesListSchema } from "@/features/CountrySelector";
import { ManufacturersListSchema } from "@/features/ManufacturerSelector";
import { CoverDesignsListSchema } from "@/features/CoverDesignSelector";
import { CoverColorsListSchema } from "@/features/CoverColorSelector";
import { CoverTexturesListSchema } from "@/features/CoverTextureSelector";
import { CoverImageMethodsListSchema } from "@/features/CoverImageMethodSelector";
import { BlockDesignsListSchema } from "@/features/BlockDesignSelector";
import { BlockCornersDesignsListSchema } from "@/features/BlockCornerDesignSelector";
import { BlockPagesMaterialsListSchema } from "@/features/BlockPageMaterialSelector";
import { BlockAndCoverFasteningMethodsListSchema } from "@/features/BlockAndCoverFasteningMethodSelector";
import { BlockPagesFasteningMethodsListSchema } from "@/features/BlockPagesFasteningMethodSelector";
import { FiberColorsListSchema } from "@/features/FiberColorSelector";
import { FiberMorphologiesListSchema } from "@/features/FiberMorphologySelector";
import { FiberStepsListSchema } from "@/features/FiberStepSelector";
import { StaplesMaterialsListSchema } from "@/features/StaplesMaterialSelector";
import { StaplesBackSizesListSchema } from "@/features/StaplesBackSizeSelector";
import { StaplesDistancesListSchema } from "@/features/StaplesDistanceSelector";
import { DetailTypesListSchema } from "@/features/DetailTypeSelector";
import { LaminateTypesListSchema } from "@/features/LaminateTypeSelector";
import { LaminateMethodsListSchema } from "@/features/LaminateMethodSelector";
import { ApplyingDataMethodsListSchema } from "@/features/ApplyingDataMethodSelector";
import { BlankTypesListSchema } from "@/features/BlankTypeSelector";
import { ResearchMethodsListSchema } from "@/entities/ResearchMethod";

export interface StateSchema {
  // Асинхронные (подключаются динамически по мере надобности)
  blanksList?: BlanksListSchema;
  blankDetails?: BlankSchema;
  securityLevelsList?: SecurityLevelsListSchema;
  countriesList?: CountriesListSchema;
  manufacturersList?: ManufacturersListSchema;
  coverDesignsList?: CoverDesignsListSchema;
  coverColorsList?: CoverColorsListSchema;
  coverTexturesList?: CoverTexturesListSchema;
  coverImageMethodsList?: CoverImageMethodsListSchema;
  blockDesignsList?: BlockDesignsListSchema;
  blockCornersDesignsList?: BlockCornersDesignsListSchema;
  blockPagesMaterialsList?: BlockPagesMaterialsListSchema;
  blockAndCoverFasteningMethodsList?: BlockAndCoverFasteningMethodsListSchema;
  blockPagesFasteningMethodsList?: BlockPagesFasteningMethodsListSchema;
  fiberColorsList?: FiberColorsListSchema;
  fiberMorphologiesList?: FiberMorphologiesListSchema;
  fiberStepsList?: FiberStepsListSchema;
  staplesMaterialsList?: StaplesMaterialsListSchema;
  staplesBackSizesList?: StaplesBackSizesListSchema;
  staplesDistancesList?: StaplesDistancesListSchema;
  detailTypesList?: DetailTypesListSchema;
  laminateTypesList?: LaminateTypesListSchema;
  laminateMethodsList?: LaminateMethodsListSchema;
  applyingDataMethodsList?: ApplyingDataMethodsListSchema;
  blankTypesList?: BlankTypesListSchema;
  researchMethodsList?: ResearchMethodsListSchema;
}

export type StateSchemaKey = keyof StateSchema;
