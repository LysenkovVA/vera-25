import { EntityState } from "@reduxjs/toolkit";
import { Document } from "@/entities/Document";

export interface DocumentsListSelectorSchema
  extends EntityState<Document, string> {
  isLoading?: boolean;
  error?: string;
  _isInitialized: boolean;
}
