import { EntityState } from "@reduxjs/toolkit";
import { BlankType } from "@/entities/BlankType";

export interface BlankTypesListSchema extends EntityState<BlankType, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
