import { EntityState } from "@reduxjs/toolkit";
import { DetailType } from "@/entities/DetailType";

export interface DetailTypesListSchema extends EntityState<DetailType, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
