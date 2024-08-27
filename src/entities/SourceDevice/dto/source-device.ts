import { Image } from "@/entities/Image";

export interface SourceDevice {
  id: string;
  name: string;
  notes?: string;

  images?: Array<Image>;
}
