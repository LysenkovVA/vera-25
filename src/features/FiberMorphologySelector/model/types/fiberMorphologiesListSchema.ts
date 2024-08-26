import { EntityState } from "@reduxjs/toolkit";
import { FiberMorphology } from "@/entities/FiberMorphology";

export interface FiberMorphologiesListSchema
  extends EntityState<FiberMorphology, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
