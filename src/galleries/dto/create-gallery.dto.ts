import { IsString } from "class-validator";

export class CreateGalleryDto {
  @IsString()
  url: string;
}
