import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { InternService } from './intern.service';
import { InternController } from './intern.controller';

@Module({
  imports: [PrismaModule],
  providers: [InternService],
  controllers: [InternController],
  exports: [InternService],
})
export class InternModule {}
