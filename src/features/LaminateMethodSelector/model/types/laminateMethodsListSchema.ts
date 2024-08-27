import { EntityState } from "@reduxjs/toolkit";
import { LaminateMethod } from "@/entities/LaminateMethod";

export interface LaminateMethodsListSchema
  extends EntityState<LaminateMethod, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
