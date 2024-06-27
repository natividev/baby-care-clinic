import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryPacientAllDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  q?: string;
}
