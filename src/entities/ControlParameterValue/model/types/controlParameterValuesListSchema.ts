import { EntityState } from "@reduxjs/toolkit";
import { ControlParameterValue } from "@/entities/ControlParameterValue";

export interface ControlParameterValuesListSchema
  extends EntityState<ControlParameterValue, string> {
  isLoading?: boolean;
  error?: string;
  _isInitialized: boolean;
}
