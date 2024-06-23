import { Module } from '@nestjs/common';
import { MedicService } from './service/medic.service';
import { MedicController } from './controller/medic.controller';
import { PrismaService } from 'src/prisma.service';
import { MedicRepository } from './repository/medic.repository';

@Module({
  controllers: [MedicController],
  providers: [MedicService, PrismaService, MedicRepository],
})
export class MedicModule {}
