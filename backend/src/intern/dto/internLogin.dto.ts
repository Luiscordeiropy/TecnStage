import { IsEmail, IsNotEmpty } from 'class-validator';

export class InternLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
