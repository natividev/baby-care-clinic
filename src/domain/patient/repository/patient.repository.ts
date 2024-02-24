import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';

@Injectable()
export class PatientRepository {
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

  async createPaciente(dto: CreatePatientDto) {
    try {
      return await this.prisma.paciente.create({
        data: { estado: true, ...dto },
      });
    } catch (error) {
      throw error;
    }
  }

  async editPaciente(pacienteId: number, dto: UpdatePatientDto) {
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
