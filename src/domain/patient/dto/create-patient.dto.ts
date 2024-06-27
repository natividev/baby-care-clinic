import {
  IsEmail,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsString,
} from 'class-validator';

enum Genero {
  Masculino = 'Masculino',
  Femenino = 'Femenino',
}

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsNotEmpty()
  edad: number;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsNotEmpty()
  telefono: string;

  @IsEnum(Genero)
  @IsNotEmpty()
  genero: Genero;

  @IsNotEmpty()
  @IsISO8601() // ejemplo: 2021-09-01
  fechaNacimiento: string;
}
