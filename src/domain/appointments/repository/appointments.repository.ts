import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AppointmentsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createAppointmentDto) {
    return this.prisma.citas.create({
      data: createAppointmentDto,
    });
  }
}
