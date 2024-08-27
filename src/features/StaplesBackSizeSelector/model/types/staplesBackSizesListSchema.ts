import { EntityState } from "@reduxjs/toolkit";
import { StaplesBackSize } from "@/entities/StaplesBackSize";

export interface StaplesBackSizesListSchema
  extends EntityState<StaplesBackSize, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
