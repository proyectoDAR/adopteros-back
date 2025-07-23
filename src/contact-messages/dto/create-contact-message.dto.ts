import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class CreateContactMessageDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  @IsString()
  subject: string;

  @IsString()
  message: string;
}
