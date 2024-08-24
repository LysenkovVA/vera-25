import { EntityState } from "@reduxjs/toolkit";
import { BlockDesign } from "@/entities/BlockDesign";

export interface BlockDesignsListSchema
  extends EntityState<BlockDesign, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
