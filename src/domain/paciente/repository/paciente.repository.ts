import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePacienteDto } from '../dto/create-paciente.dto';
import { UpdatePacienteDto } from '../dto/update-paciente.dto';

@Injectable()
export class PacienteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getPacientes() {
    return await this.prisma.paciente.findMany({ where: { estado: true } });
  }

  async getPacientesInactivos() {
    return await this.prisma.paciente.findMany({ where: { estado: false } });
  }

  async getPacienteById(pacienteId: number) {
    return await this.prisma.paciente.findFirst({
      where: { id: pacienteId, estado: true },
    });
  }

  async createPaciente(dto: CreatePacienteDto) {
    try {
      return await this.prisma.paciente.create({
        data: { estado: true, ...dto },
      });
    } catch (error) {
      throw error;
    }
  }

  async editPaciente(pacienteId: number, dto: UpdatePacienteDto) {
    await this.prisma.paciente.update({
      where: { id: pacienteId },
      data: { ...dto },
    });
  }

  async deletePaciente(pacienteId: number) {
    await this.prisma.paciente.update({
      where: { id: pacienteId },
      data: { estado: false },
    });
  }
}
