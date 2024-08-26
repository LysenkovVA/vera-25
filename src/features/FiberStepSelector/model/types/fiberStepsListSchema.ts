import { EntityState } from "@reduxjs/toolkit";
import { FiberStep } from "@/entities/FiberStep";

export interface FiberStepsListSchema extends EntityState<FiberStep, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
