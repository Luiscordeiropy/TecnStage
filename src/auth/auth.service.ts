import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { InternService } from '../intern/intern.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly internService: InternService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.validateUser(email, password);
    if (user) {
      return user;
    }
    return null;
  }

  async validateIntern(email: string, password: string) {
    const intern = await this.internService.validateIntern(email, password);
    if (intern) {
      return intern;
    }
    return null;
  }

  login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
