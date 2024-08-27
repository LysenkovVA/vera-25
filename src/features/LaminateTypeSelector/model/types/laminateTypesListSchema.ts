import { EntityState } from "@reduxjs/toolkit";
import { LaminateType } from "@/entities/LaminateType";

export interface LaminateTypesListSchema
  extends EntityState<LaminateType, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
