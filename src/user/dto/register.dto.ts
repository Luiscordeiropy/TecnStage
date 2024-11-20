import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserRegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  name: string;
}
