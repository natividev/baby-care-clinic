import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';

@Injectable()
export class AppointmentsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAppointmentDto: CreateAppointmentDto) {
    const { fechaCita, idPaciente, idMedico, observaciones } =
      createAppointmentDto;

    const isDisponible = await this.prisma.citas.findFirst({
      where: {
        id_medico: idMedico,
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
        id_paciente: idPaciente,
        id_medico: idMedico,
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
