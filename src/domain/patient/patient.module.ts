import { Module } from '@nestjs/common';
import { PatientService } from './service/patient.service';
import { PatientController } from './controller/patient.controller';
import { PrismaService } from 'src/prisma.service';
import { PatientRepository } from './repository/patient.repository';
import { PdfService } from 'src/pdf.service';

@Module({
  controllers: [PatientController],
  providers: [PatientService, PrismaService, PatientRepository, PdfService],
})
export class PatientModule { }
