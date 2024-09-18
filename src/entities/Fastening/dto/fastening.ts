import { BlockAndCoverFasteningMethod } from "@/entities/BlockAndCoverFasteningMethod";
import { BlockPagesFasteningMethod } from "@/entities/BlockPagesFasteningMethod";
import { FasteningFiberDto } from "@/entities/FasteningFiber";
import { FasteningStaples } from "@/entities/FasteningStaples";

export interface Fastening {
  id?: string;
  blockAndCoverFasteningMethod?: BlockAndCoverFasteningMethod;
  blockPagesFasteningMethod?: BlockPagesFasteningMethod;
  fasteningFibers?: Array<FasteningFiberDto>;
  fasteningStaples?: Array<FasteningStaples>;
  notes?: string;
}
