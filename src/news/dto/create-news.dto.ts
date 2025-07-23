import { IsString, IsUrl } from "class-validator";

export class CreateNewsDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsUrl()
  imageUrl: string;

  @IsString()
  type: string; // campaign, event, collect,
}
