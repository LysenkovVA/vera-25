import { EntityState } from "@reduxjs/toolkit";
import { ApplyingDataMethod } from "@/entities/ApplyingDataMethod";

export interface ApplyingDataMethodsListSchema
  extends EntityState<ApplyingDataMethod, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
