import { Module } from '@nestjs/common';
import { AppointmentsService } from './services/appointments.service';
import { AppointmentsController } from './controller/appointments.controller';
import { AppointmentsRepository } from './repository/appointments.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService, AppointmentsRepository, PrismaService],
})
export class AppointmentsModule {}
