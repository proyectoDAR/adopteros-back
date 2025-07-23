import { IsDate, IsString } from "class-validator";

export class CreateProfileDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDate()
  birthday: string;
}
