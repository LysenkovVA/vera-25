import { DetailType } from "@/entities/DetailType";
import { Location } from "@prisma/client";

export interface Detail {
  id: string;
  detailType?: DetailType;
  location: Location;
  locationDescription?: string;
  customLocation?: string;
  notes?: string;
}
