import { Controller, Get, Param, Delete } from '@nestjs/common';
import { GeneralesService } from './generales.service';

@Controller('generales')
export class GeneralesController {
  constructor(private readonly generalesService: GeneralesService) {}

  @Get('actividades-economicas')
  async actividadesEconomicas() {
    return await this.generalesService.actividadesEconomicas();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalesService.remove(+id);
  }
}
