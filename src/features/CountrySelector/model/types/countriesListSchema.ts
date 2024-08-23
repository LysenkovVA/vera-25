import { EntityState } from "@reduxjs/toolkit";
import { Country } from "@/entities/Country";

export interface CountriesListSchema extends EntityState<Country, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
