import { RequirementDto } from "@/entities/Requirement";

export interface RequirementGroupDto {
  id?: string;
  name?: string;
  position?: string;
  notes?: string;
  requirements?: Array<RequirementDto>;
}
