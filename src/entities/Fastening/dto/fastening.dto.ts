import { BlockAndCoverFasteningMethod } from "@/entities/BlockAndCoverFasteningMethod";
import { BlockPagesFasteningMethod } from "@/entities/BlockPagesFasteningMethod";
import { FasteningFiberDto } from "@/entities/FasteningFiber";
import { FasteningStaplesDto } from "@/entities/FasteningStaples";

export interface FasteningDto {
  id?: string;
  blockAndCoverFasteningMethod?: BlockAndCoverFasteningMethod;
  blockPagesFasteningMethod?: BlockPagesFasteningMethod;
  fasteningFibers?: Array<FasteningFiberDto>;
  fasteningStaples?: Array<FasteningStaplesDto>;
  notes?: string;
}
