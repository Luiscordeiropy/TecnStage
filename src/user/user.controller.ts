import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dto/register.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerDto: UserRegisterDto) {
    return this.userService.newUser(registerDto);
  }
}
