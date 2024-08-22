import { Blank } from "./blank";

export interface BlankSchema {
  blank?: Blank;
  blankFormData?: Blank;
  isLoading?: boolean;
  error?: string;
  _isInitialized?: boolean;
}
