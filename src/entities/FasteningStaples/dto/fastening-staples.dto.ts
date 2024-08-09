import { StaplesMaterialDto } from "@/entities/StaplesMaterial";
import { StaplesBackSizeDto } from "@/entities/StaplesBackSize";
import { StaplesDistanceDto } from "@/entities/StaplesDistance";

export interface FasteningStaplesDto {
  id?: string;
  staplesMaterial?: StaplesMaterialDto;
  staplesBackSize?: StaplesBackSizeDto;
  staplesDistance?: StaplesDistanceDto;
  notes?: string;
}
