import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateAppointmentDto {
  @Transform(({ value }) => new Date(value))
  @IsNotEmpty()
  fechaCita: Date;
  @IsNotEmpty()
  @IsNumber()
  idPaciente: number;
  @IsNotEmpty()
  @IsNumber()
  idMedico: number;
  @IsNotEmpty()
  @IsString()
  observaciones: string;
}
