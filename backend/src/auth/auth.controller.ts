import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../user/dto/login.dto';
import { InternLoginDto } from '../intern/dto/internLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/user')
  async loginUser(@Body() loginDto: UserLoginDto) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );

    if (user) {
      const token = this.authService.login(user)
      return { 
        user: {
          name: user.name,
          email: user.email,
        },
        token,
       };
    } else {
      return { message: 'Invalid credentials' };
    }
  }

  @Post('login/intern')
  async loginIntern(@Body() loginDto: InternLoginDto) {
    const intern = await this.authService.validateIntern(
      loginDto.email,
      loginDto.password,
    );

    if (intern) {
      return { access_token: this.authService.login(intern) };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}

