import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { PatientService } from '../service/patient.service';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { PdfService } from 'src/pdf.service';
import * as  path from 'path';
import { Response } from 'express'; // Importa el tipo de dato Response de express

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService, private readonly pdfService: PdfService) { }

  // @Post()
  // create(@Body() createPatientDto: CreatePatientDto) {
  //   return this.patientService.create(createPatientDto);
  // }

  // @Get()
  // findAll() {
  //   return this.patientService.findAll();
  // }

  // @Get('/inactives')
  // findAllInactive() {
  //   return this.patientService.findAllInactive();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.patientService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
  //   return this.patientService.update(+id, updatePatientDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.patientService.remove(+id);
  // }

  @Get('/generate')
  async generatePdf(@Res() res: Response) {
    // const templatePath = 'ruta/al/template.pdf';
    // const templatePath = '/ruta/completa/a/test.odt';
    const templatePath = '/home/natividad/Documentos/developer/baby-care-clinic/src/templates/test.odt';
    console.log('templatePath', templatePath);
    const convertTo = 'pdf'; // Puedes cambiarlo si deseas convertir a un formato diferente
    const data = {
      firstname: 'John',
      lastname: 'Wick'
    };

    try {
      const pdfBuffer = await this.pdfService.renderPdf(templatePath, data, convertTo);

      //Retornar el buffer del PDF para que se renderice en el navegador debo colocar los header de pdf  y el buffer
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=example.pdf');
      res.send(pdfBuffer);


    } catch (error) {
      // Manejar errores
      console.error('Error al generar PDF:', error);
      throw new Error('Error al generar PDF');
    }
  }
}
