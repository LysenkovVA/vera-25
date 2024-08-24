import { EntityState } from "@reduxjs/toolkit";
import { CoverImageMethod } from "@/entities/CoverImageMethod";

export interface CoverImageMethodsListSchema
  extends EntityState<CoverImageMethod, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
