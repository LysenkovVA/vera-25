import { EntityState } from "@reduxjs/toolkit";
import { Blank } from "@/entities/Blank";

export interface BlanksListSchema extends EntityState<Blank, string> {
  isLoading?: boolean;
  error?: string;
  // Pagination
  take?: number;
  skip?: number;
  search?: string;
  totalCount?: number;
  // Initialization
  _isInitialized: boolean;
}
