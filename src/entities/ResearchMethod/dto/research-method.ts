import { Image } from "@/entities/Image";

export interface ResearchMethod {
  id: string;
  name: string;
  // Позиция (для сортировки)
  position: number;
  notes: string;
  images?: Image[];
}
