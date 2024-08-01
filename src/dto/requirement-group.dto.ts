import { RequirementDto } from "@/dto/requirement.dto";

export interface RequirementGroupDto {
  id?: string;
  name?: string;
  position?: string;
  notes?: string;
  requirements?: Array<RequirementDto>;
}
