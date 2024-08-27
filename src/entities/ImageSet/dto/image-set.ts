import { Image } from "@/entities/Image";
import { ImageResource } from "@/entities/ImageResource";
import { Remedy } from "@/entities/Remedy";

export interface ImageSet {
  id: string;
  images?: Array<Image>;
  remedies: Array<Remedy>;

  imageResource?: ImageResource;
  imageResourceId?: string;
}
