import { Controller, Post, Body } from '@nestjs/common';
import { InternService } from './intern.service';
import { InternRegisterDto } from './dto/internRegister.dto';

@Controller('intern')
export class InternController {
  constructor(private readonly internService: InternService) {}

  @Post('register')
  async register(@Body() registerDto: InternRegisterDto) {
    return this.internService.newIntern(registerDto);
  }
}
