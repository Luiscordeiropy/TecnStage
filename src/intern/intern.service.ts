import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InternRegisterDto } from './dto/internRegister.dto';
import { Intern } from './interfaces/internRegister.dto';
import * as bcrypt from 'bcrypt';
import { intern } from '@prisma/client';

@Injectable()
export class InternService {
  constructor(private readonly prisma: PrismaService) {}


   async validateIntern(email: string, password: string) {
    const intern = await this.prisma.intern.findUnique({ where: { email } });
    if (intern && (await bcrypt.compare(password, intern.password))) {
      return intern;
    }
    return null;
  }

  async newIntern(registerDto: InternRegisterDto): Promise<Intern> {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    return this.prisma.intern.create({
      data: {
        name: registerDto.name,
        email: registerDto.email,
        cpf: registerDto.cpf,
        curso: registerDto.curso,
        password: hashedPassword,
      },
    });
  }
}
