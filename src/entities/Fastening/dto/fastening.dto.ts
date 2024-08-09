import { BlockAndCoverFasteningMethodDto } from "@/entities/BlockAndCoverFasteningMethod";
import { BlockPagesFasteningMethodDto } from "@/entities/BlockPagesFasteningMethod";
import { FasteningFiberDto } from "@/entities/FasteningFiber";
import { FasteningStaplesDto } from "@/entities/FasteningStaples";

export interface FasteningDto {
  id?: string;
  blockAndCoverFasteningMethod?: BlockAndCoverFasteningMethodDto;
  blockPagesFasteningMethod?: BlockPagesFasteningMethodDto;
  fasteningFibers?: Array<FasteningFiberDto>;
  fasteningStaples?: Array<FasteningStaplesDto>;
  notes?: string;
}
