import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateMedicDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  especialidad: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;
}
