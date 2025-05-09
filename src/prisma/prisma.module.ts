import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exportando para que outros módulos possam usar o PrismaService
})
export class PrismaModule {}