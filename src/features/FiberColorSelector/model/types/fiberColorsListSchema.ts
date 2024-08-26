import { EntityState } from "@reduxjs/toolkit";
import { FiberColor } from "@/entities/FiberColor";

export interface FiberColorsListSchema extends EntityState<FiberColor, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
