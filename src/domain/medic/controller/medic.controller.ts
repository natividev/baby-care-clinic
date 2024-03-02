import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedicService } from '../service/medic.service';
import { CreateMedicDto } from '../dto/create-medic.dto';
import { UpdateMedicDto } from '../dto/update-medic.dto';

@Controller('medic')
export class MedicController {
  constructor(private readonly medicService: MedicService) {}

  @Post()
  create(@Body() createMedicDto: CreateMedicDto) {
    return this.medicService.create(createMedicDto);
  }

  @Get()
  findAll() {
    return this.medicService.findAll();
  }

  @Get('/inactives')
  findAllInactives() {
    return this.medicService.findAllInactives();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicDto: UpdateMedicDto) {
    return this.medicService.update(+id, updateMedicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicService.remove(+id);
  }
}
