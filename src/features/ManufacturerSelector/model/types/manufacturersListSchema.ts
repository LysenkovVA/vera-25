import { EntityState } from "@reduxjs/toolkit";
import { Manufacturer } from "@/entities/Manufacturer";

export interface ManufacturersListSchema
  extends EntityState<Manufacturer, string> {
  isLoading?: boolean;
  error?: string;
  // Initialization
  _isInitialized: boolean;
}
