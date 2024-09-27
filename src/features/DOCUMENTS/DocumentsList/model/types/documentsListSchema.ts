import { EntityState } from "@reduxjs/toolkit";
import { Document } from "@/entities/Document";

export interface DocumentsListSchema extends EntityState<Document, string> {
  isLoading?: boolean;
  error?: string;
  take?: number;
  skip?: number;
  search?: string;
  totalCount?: number;
  _isInitialized: boolean;
}
