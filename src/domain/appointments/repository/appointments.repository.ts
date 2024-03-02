import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';

@Injectable()
export class AppointmentsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAppointmentDto: CreateAppointmentDto) {
    const { fechaCita, idPaciente, idMedico, observaciones } =
      createAppointmentDto;

    // necesito validar si el medico tiene disponibilidad en la fecha y hora seleccionada para la cita

    const isDisponible = await this.prisma.citas.findFirst({
      where: {
        idMedico,
        fecha_hora: new Date(fechaCita),
      },
    });

    if (isDisponible) {
      return {
        message: 'El médico no está disponible en la fecha y hora seleccionada',
      };
    }

    const data = await this.prisma.citas.create({
      data: {
        fecha_hora: new Date(fechaCita),
        observaciones,
        idPaciente,
        idMedico,
      },
    });

    if (!data) {
      throw new Error('No se pudo crear la cita');
    }

    return {
      message: 'Cita creada con éxito',
    };
  }
}
