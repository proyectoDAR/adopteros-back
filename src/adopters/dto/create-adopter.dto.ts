import { IsBoolean, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateAdopterDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  age: number;

  @IsString()
  time: string;

  @IsString()
  sex: string;

  @IsString()
  size: string;

  @IsString()
  health: string;

  @IsString()
  personality: string;

  @IsString()
  story: string;

  @IsString()
  compatibility: string;

  @IsBoolean()
  state: boolean;
}
