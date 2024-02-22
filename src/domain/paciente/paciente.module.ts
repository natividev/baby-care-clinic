import { Module } from '@nestjs/common';
import { PacienteService } from './service/paciente.service';
import { PacienteController } from './controller/paciente.controller';
import { PrismaService } from 'src/prisma.service';
import { PacienteRepository } from './repository/paciente.repository';

@Module({
  controllers: [PacienteController],
  providers: [PacienteService, PrismaService, PacienteRepository],
})
export class PacienteModule {}
