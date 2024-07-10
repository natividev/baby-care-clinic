import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateMedicDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellidos: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;

  @IsString()
  @IsNotEmpty()
  jvpm: string;

  @IsString()
  @IsNotEmpty()
  documentoDeIdentidad: string;

  @IsString()
  @IsOptional()
  nrc: string;

  @IsString()
  actividadEconomica: string;

  @IsNumber()
  @IsNotEmpty()
  especialidad: number;

  @IsEmail()
  @IsNotEmpty()
  correo: string;
}
