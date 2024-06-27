import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsObject, IsOptional } from 'class-validator';

export class PaginationQueryDto<Filter> {
  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @IsNumber()
  @IsOptional()
  readonly page: number = 1;

  @ApiPropertyOptional({
    minimum: 1,
    default: 25,
  })
  @IsNumber()
  @IsOptional()
  readonly limit: number = 25;

  @ApiPropertyOptional({ enum: ['asc', 'desc'], default: 'desc' })
  @IsOptional()
  readonly _orderBy: 'asc' | 'desc' = 'desc';

  @ApiPropertyOptional({ type: String, format: 'date' })
  @IsOptional()
  @IsDateString()
  readonly from?: string;

  @ApiPropertyOptional({ type: String, format: 'date' })
  @IsOptional()
  @IsDateString()
  readonly to?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  filters?: Filter;
}
