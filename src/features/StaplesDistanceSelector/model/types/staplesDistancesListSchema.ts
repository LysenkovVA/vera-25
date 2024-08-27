import { EntityState } from "@reduxjs/toolkit";
import { StaplesDistance } from "@/entities/StaplesDistance";

export interface StaplesDistancesListSchema
  extends EntityState<StaplesDistance, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
