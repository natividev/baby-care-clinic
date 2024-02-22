import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  edad: number;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsNotEmpty()
  telefono: string;
}
