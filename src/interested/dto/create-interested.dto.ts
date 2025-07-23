import { IsBoolean, IsEmail, IsPhoneNumber, IsString, IsUUID } from "class-validator";

export class CreateInterestedDto {
  @IsString()
  name: string;

  @IsPhoneNumber()
  phone: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  isCaba: boolean;

  @IsUUID()
  dog: string;
}
