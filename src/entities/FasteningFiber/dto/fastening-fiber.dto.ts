import { FiberColorDto } from "@/entities/FiberColor";
import { FiberMorphologyDto } from "@/entities/FiberMorphology";
import { FiberStepDto } from "@/entities/FiberStep";

export interface FasteningFiberDto {
  id?: string;
  fiberColor?: FiberColorDto;
  fiberMorphology?: FiberMorphologyDto;
  fiberStep?: FiberStepDto;
  notes?: string;
}
