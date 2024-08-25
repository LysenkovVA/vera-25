import { EntityState } from "@reduxjs/toolkit";
import { BlockAndCoverFasteningMethod } from "@/entities/BlockAndCoverFasteningMethod";

export interface BlockAndCoverFasteningMethodsListSchema
  extends EntityState<BlockAndCoverFasteningMethod, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
