import { ResearchMethod } from "@/entities/ResearchMethod";
import { ImageSet } from "@/entities/ImageSet";
import { SourceDevice } from "@/entities/SourceDevice";

export interface Image {
  id: string;
  // Имя файла
  name?: string; // TODO - Заменить на просто name
  // Путь к сжатому изображению
  thumbnailPath?: string;
  // Путь к оригиналу
  highQualityPath?: string;
  // Размер
  size?: number;
  // Тип
  type?: string;
  // Ссылка на режим изображения (УФ, ИК и др.)
  researchMethod?: ResearchMethod;
  researchMethodId?: string;
  // Ссылка на набор изображений
  imageSet?: ImageSet;
  imageSetId?: string;
  // Ссылка на устройство, с помощью которого получено изображение
  sourceDevice?: SourceDevice;
  sourceDeviceId?: string;
  // Примечания
  notes?: string;
}
