import { EntityState } from "@reduxjs/toolkit";
import { BlockPagesMaterial } from "@/entities/BlockPagesMaterial";

export interface BlockPagesMaterialsListSchema
  extends EntityState<BlockPagesMaterial, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
