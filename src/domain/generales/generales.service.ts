import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/src/prisma.service';

@Injectable()
export class GeneralesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return `This action returns all generales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generale`;
  }

  remove(id: number) {
    return `This action removes a #${id} generale`;
  }

  async actividadesEconomicas() {
    const data = await this.prisma.actividadEconomica.findMany();
    return {
      data,
    };
  }
}
