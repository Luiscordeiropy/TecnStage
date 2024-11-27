import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dto/register.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerDto: UserRegisterDto) {
    return this.userService.newUser(registerDto);
  }

  @Get()
  async getAllUsers() {
      return this.userService.findAllUsers();
  }

  @Delete(':id')
  async deleteUsers(@Param('id') id: string) {
      return this.userService.deleteUser(id);
  }
}
