import { RequirementGroupDto } from "@/dto/requirement-group.dto";

export interface DocumentDto {
  id?: string;
  name?: string;
  number?: string;
  date?: Date;
  startDate?: Date;
  endDate?: Date;
  notes?: string;
  requirementGroups?: Array<RequirementGroupDto>;
}
