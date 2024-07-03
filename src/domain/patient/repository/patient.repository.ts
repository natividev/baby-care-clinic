import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { Estado } from '../../common/enum/Estados';
import { Paciente } from '@db';
import { pageBuilder } from '@/src/common/pageBuilder';
import { QueryPacientAllDto } from '../dto';
import { PaginationQueryDto } from '../../dto/pagination-query.dto';
@Injectable()
export class PatientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getPacientes(queryDto: PaginationQueryDto<QueryPacientAllDto>) {
    const { page, limit, _orderBy, filters } = queryDto;
    // const { q } = filters;/

    console.log('queryDto', queryDto);
    console.log('filters', filters);

    const patients = await this.prisma.paciente.findMany({
      where: { estado: true },
      select: {
        id: true,
        nombre: true,
        edad: true,
        email: true,
        telefono: true,
      },
    });

    if (patients) {
      return pageBuilder<Paciente>(this.prisma.paciente, {
        page,
        limit,
        _orderBy: {
          id: _orderBy,
        },
      });
    } else {
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
        email: true,
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
      const {
        nombre,
        apellido,
        correo,
        edad,
        fechaNacimiento,
        genero,
        telefono,
      } = dto;
      await this.prisma.paciente.create({
        data: {
          nombre,
          apellidos: apellido,
          email: correo,
          edad,
          fecha_nacimiento: fechaNacimiento,
          genero,
          telefono,
        },
      });
      return { estado: Estado.Creado };
    } catch (error) {
      console.log('error', error);
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
