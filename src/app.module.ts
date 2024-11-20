import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { InternModule } from './intern/intern.module';
import { PrismaModule } from './prisma/prisma.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthModule, UserModule, InternModule, PrismaModule
  ],
})
export class AppModule {}
