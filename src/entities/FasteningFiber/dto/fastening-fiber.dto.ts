import { FiberColor } from "@/entities/FiberColor";
import { FiberMorphology } from "@/entities/FiberMorphology";
import { FiberStep } from "@/entities/FiberStep";

export interface FasteningFiberDto {
  id?: string;
  fiberColor?: FiberColor;
  fiberMorphology?: FiberMorphology;
  fiberStep?: FiberStep;
  notes?: string;
}
