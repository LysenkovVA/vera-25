import { ControlParameter } from "@/entities/ControlParameter";

export interface Document {
  id: string;
  name?: string;
  number?: string;
  date?: Date;
  startDate?: Date;
  isNoEndDate?: boolean;
  endDate?: Date;
  notes?: string;
  // requirementGroups?: Array<RequirementGroupDto>;
  controlParameters?: Array<ControlParameter>;
}
