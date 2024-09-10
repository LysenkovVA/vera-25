import { EntityState } from "@reduxjs/toolkit";
import { ResearchMethod } from "@/entities/ResearchMethod";

export interface ResearchMethodsListSchema
  extends EntityState<ResearchMethod, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
