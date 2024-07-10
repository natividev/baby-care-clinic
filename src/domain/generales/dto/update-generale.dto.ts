import { PartialType } from '@nestjs/swagger';
import { CreateGeneraleDto } from './create-generale.dto';

export class UpdateGeneraleDto extends PartialType(CreateGeneraleDto) {}
