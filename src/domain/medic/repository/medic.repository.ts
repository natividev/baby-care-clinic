import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMedicDto } from '../dto/create-medic.dto';
import { Estado } from 'src/domain/common/enum/Estados';
import { UpdateMedicDto } from '../dto/update-medic.dto';

@Injectable()
export class MedicRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getMedicById(medicId: number) {
    const medic = await this.prisma.medicos.findFirst({
      where: { id: medicId, estado: true },
      select: {
        id: true,
        nombre: true,
        especialidad: true,
        correo: true,
      },
    });
    return medic ?? { error: `el registro con id: ${medicId} no existe` };
  }

  async getMedics() {
    const medic = await this.prisma.medicos.findMany({
      where: { estado: true },
      select: {
        id: true,
        nombre: true,
        especialidad: true,
        correo: true,
      },
    });
    return medic ?? { error: 'No hay registros...' };
  }

  async getInactiveMedics() {
    const medic = await this.prisma.medicos.findMany({
      where: { estado: false },
      select: {
        id: true,
        nombre: true,
        especialidad: true,
        correo: true,
      },
    });
    return medic ?? { error: 'No hay registros...' };
  }

  async createMedic(dto: CreateMedicDto) {
    console.log('awwwwww', dto);
    try {
      const {
        actividadEconomica: actividadEconomica,
        apellidos,
        correo,
        documentoDeIdentidad,
        especialidad,
        jvpm,
        nombre,
        nrc,
        telefono,
      } = dto;

      await this.prisma.medicos.create({
        data: {
          nombre,
          apellidos,
          telefono,
          jvpm,
          documento_de_identidad: documentoDeIdentidad,
          nrc,
          especialidad,
          correo,
          actividad_economica_codigo: actividadEconomica,
        },
      });
      return { message: 'Médico creado exitosamente' };
    } catch (error) {
      console.log('error', error);
      if (error.code === 'P2003') {
        const fieldName = error.meta?.field_name || 'Unknown field';
        return {
          message: `Error al crear el médico: Falló la restricción de clave externa en el campo ${fieldName}`,
          error: error.message,
        };
      }

      return {
        message: 'Error al crear el médico',
        error: error,
      };
    }
  }

  async editMedic(medicId: number, dto: UpdateMedicDto) {
    const {
      actividadEconomica,
      apellidos,
      correo,
      documentoDeIdentidad,
      especialidad,
      jvpm,
      nombre,
      nrc,
      telefono,
    } = dto;
    try {
      const exits = await this.prisma.medicos.findUnique({
        where: { id: medicId, estado: true },
      });
      if (!exits)
        return { estado: Estado.Fallindo, error: 'El registro no existe' };

      await this.prisma.medicos.update({
        where: { id: medicId },
        data: {
          actividad_economica_codigo: actividadEconomica,
          apellidos,
          correo,
          documento_de_identidad: documentoDeIdentidad,
          especialidad,
          jvpm,
          nombre,
          nrc,
          telefono,
        },
      });
      return { estado: Estado.Editado };
    } catch (error) {
      return { estado: Estado.Fallindo, error: error.meta.cause };
    }
  }

  async deleteMedic(medicId: number) {
    try {
      const exits = await this.prisma.medicos.findUnique({
        where: { id: medicId, estado: true },
      });
      if (!exits)
        return { estado: Estado.Fallindo, error: 'El registro no existe' };

      await this.prisma.medicos.update({
        where: { id: medicId },
        data: { estado: false },
      });
      return { estado: Estado.Eliminado };
    } catch (error) {
      return { estado: Estado.Fallindo, error: error.meta };
    }
  }

  async getSpecialty() {
    return await this.prisma.specialties.findMany();
  }
}
