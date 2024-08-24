import { EntityState } from "@reduxjs/toolkit";
import { CoverTexture } from "@/entities/CoverTexture";

export interface CoverTexturesListSchema
  extends EntityState<CoverTexture, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
