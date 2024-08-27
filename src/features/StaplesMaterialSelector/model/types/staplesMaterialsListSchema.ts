import { EntityState } from "@reduxjs/toolkit";
import { StaplesMaterial } from "@/entities/StaplesMaterial";

export interface StaplesMaterialsListSchema
  extends EntityState<StaplesMaterial, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
