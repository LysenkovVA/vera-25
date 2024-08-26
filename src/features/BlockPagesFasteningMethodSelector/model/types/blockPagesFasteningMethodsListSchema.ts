import { EntityState } from "@reduxjs/toolkit";
import { BlockPagesFasteningMethod } from "@/entities/BlockPagesFasteningMethod";

export interface BlockPagesFasteningMethodsListSchema
  extends EntityState<BlockPagesFasteningMethod, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
