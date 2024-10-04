import { EntityState } from "@reduxjs/toolkit";
import { Document } from "@/entities/Document";

export interface DocumentsListSchema extends EntityState<Document, string> {
  isLoading?: boolean;
  error?: string;
  page?: number;
  take?: number;
  skip?: number;
  search?: string;
  totalCount?: number;
  _isInitialized: boolean;
}
