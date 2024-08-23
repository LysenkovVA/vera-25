import { EntityState } from "@reduxjs/toolkit";
import { SecurityLevel } from "@/entities/SecurityLevel";

export interface SecurityLevelsListSchema
  extends EntityState<SecurityLevel, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
