import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { Estado } from '../../common/enum/Estados';

@Injectable()
export class PatientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getPacientes() {
    const patients = await this.prisma.paciente.findMany({
      where: { estado: true },
      select: {
        id: true,
        nombre: true,
        edad: true,
        correo: true,
        telefono: true,
      },
    });
    if (patients) return patients;
    else {
      return { error: 'no hay paciente...' };
    }
  }

  async getPacientesInactivos() {
    const patients = await this.prisma.paciente.findMany({
      where: { estado: false },
      select: {
        id: true,
        nombre: true,
        edad: true,
        correo: true,
        telefono: true,
      },
    });
    if (patients) return patients;
    else {
      return { error: 'no hay paciente...' };
    }
  }

  async getPacienteById(pacienteId: number) {
    const paciente = await this.prisma.paciente.findFirst({
      where: { id: pacienteId, estado: true },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { estado, ...rest } = paciente;
    if (paciente) return rest;
    else return { error: `paciente con id: ${pacienteId} no existe` };
  }

  async createPaciente(dto: CreatePatientDto) {
    try {
      await this.prisma.paciente.create({
        data: { estado: true, ...dto },
      });
      return { estado: Estado.Creado };
    } catch (error) {
      return { estado: Estado.Fallindo, error: error };
    }
  }

  async editPaciente(pacienteId: number, dto: UpdatePatientDto) {
    try {
      await this.prisma.paciente.update({
        where: { id: pacienteId },
        data: { ...dto },
      });
      return { estado: Estado.Editado };
    } catch (error) {
      return { estado: Estado.Fallindo, error: error.meta.cause };
    }
  }

  async deletePaciente(pacienteId: number) {
    try {
      await this.prisma.paciente.update({
        where: { id: pacienteId },
        data: { estado: false },
      });
      return { estado: Estado.Editado };
    } catch (error) {
      return { estado: Estado.Fallindo, error: error.meta.cause };
    }
  }
}
