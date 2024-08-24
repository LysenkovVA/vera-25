import { EntityState } from "@reduxjs/toolkit";
import { CoverDesign } from "@/entities/CoverDesign";

export interface CoverDesignsListSchema
  extends EntityState<CoverDesign, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
