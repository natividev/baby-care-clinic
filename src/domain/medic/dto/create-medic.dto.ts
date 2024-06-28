import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateMedicDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  especialidad: number;

  @IsEmail()
  @IsNotEmpty()
  correo: string;
}
