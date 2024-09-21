import { EntityState } from "@reduxjs/toolkit";
import { ControlParameter } from "./control-parameter";

export interface ControlParametersListSchema
  extends EntityState<ControlParameter, string> {
  isLoading?: boolean;
  error?: string;
  _isInitialized: boolean;
}
