import { EntityState } from "@reduxjs/toolkit";
import { CoverColor } from "@/entities/CoverColor";

export interface CoverColorsListSchema extends EntityState<CoverColor, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
