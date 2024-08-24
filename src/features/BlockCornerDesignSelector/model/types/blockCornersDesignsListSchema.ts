import { EntityState } from "@reduxjs/toolkit";
import { BlockCornersDesign } from "@/entities/BlockCornersDesign";

export interface BlockCornersDesignsListSchema
  extends EntityState<BlockCornersDesign, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
