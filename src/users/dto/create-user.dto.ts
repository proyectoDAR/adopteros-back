import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  user: string;

  @IsString()
  @MinLength(6, { message: "Password must be at least 8 characters long" })
  @Matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, { message: "Password must contain at least one letter and one number" })
  password: string;
}
