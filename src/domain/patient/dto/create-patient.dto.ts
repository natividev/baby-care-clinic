import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePatientDto {
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
