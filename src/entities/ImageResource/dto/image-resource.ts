import { ImageSet } from "@/entities/ImageSet";
import { Blank } from "@/entities/Blank";

export interface ImageResource {
  id: string;
  // Название (например страница №1)
  name: string;
  // Позиция для сортировки
  position: number;
  notes?: string;

  imageSets: Array<ImageSet>;

  blank?: Blank;
  blankId?: string;
}
