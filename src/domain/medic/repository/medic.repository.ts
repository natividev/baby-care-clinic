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
    });
    if (medic != null) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { estado, ...rest } = medic;
      return rest;
    } else return;
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
    if (medic) return medic;
    else return { error: 'No hay registros...' };
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
    if (medic) return medic;
    else return { error: 'No hay registros...' };
  }

  async createMedic(dto: CreateMedicDto) {
    try {
      await this.prisma.medicos.create({
        data: { estado: true, ...dto },
      });
      return { estado: Estado.Creado };
    } catch (error) {
      return { estado: Estado.Fallindo, error: error.meta.cause };
    }
  }

  async editMedic(medicId: number, dto: UpdateMedicDto) {
    try {
      const exits = this.getMedicById(medicId);
      if (exits != null) {
        await this.prisma.medicos.update({
          where: { id: medicId },
          data: { ...dto },
        });
        return { estado: Estado.Editado };
      } else return { estado: Estado.Fallindo, error: 'El registro no existe' };
    } catch (error) {
      return { estado: Estado.Fallindo, error: error.meta.cause };
    }
  }

  async deleteMedic(medicId: number) {
    try {
      const exits = await this.getMedicById(medicId);
      if (exits) {
        await this.prisma.medicos.update({
          where: { id: medicId },
          data: { estado: false },
        });
        return { estado: Estado.Eliminado };
      } else return { estado: Estado.Fallindo, error: 'El registro no existe' };
    } catch (error) {
      return { estado: Estado.Fallindo, error: error.meta };
    }
  }
}
