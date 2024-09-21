import { EntityState } from "@reduxjs/toolkit";
import { Document } from "@/entities/Document";

export interface DocumentsListSchema extends EntityState<Document, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
