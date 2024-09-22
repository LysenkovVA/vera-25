import { Document } from "./document";

export interface DocumentSchema {
  document?: Document;
  documentFormData?: Document;
  isLoading?: boolean;
  error?: string;
  _isInitialized?: boolean;
}
