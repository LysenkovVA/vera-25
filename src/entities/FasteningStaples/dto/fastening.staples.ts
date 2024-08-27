import { StaplesMaterial } from "@/entities/StaplesMaterial";
import { StaplesBackSize } from "@/entities/StaplesBackSize";
import { StaplesDistance } from "@/entities/StaplesDistance";

export interface FasteningStaples {
  id: string;
  staplesMaterial?: StaplesMaterial;
  staplesBackSize?: StaplesBackSize;
  staplesDistance?: StaplesDistance;
  notes?: string;
}
