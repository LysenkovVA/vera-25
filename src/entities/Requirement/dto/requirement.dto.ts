export type StepStatus = "applied" | "declined" | "skipped";

export interface RequirementDto {
  id?: string;
  name?: string;
  position?: string;
  notes?: string;

  stepStatus?: StepStatus;
}
