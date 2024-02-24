import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { PatientRepository } from '../repository/patient.repository';

@Injectable()
export class PatientService {
  constructor(private readonly patientRepository: PatientRepository) {}

  async create(createPatientDto: CreatePatientDto) {
    try {
      return await this.patientRepository.createPaciente(createPatientDto);
    } catch (error) {
      console.log();
      throw error;
    }
  }

  findAll() {
    return this.patientRepository.getPacientes();
  }

  findAllInactive() {
    return this.patientRepository.getPacientesInactivos();
  }

  findOne(id: number) {
    return this.patientRepository.getPacienteById(id);
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const optenerPaciente = this.findOne(id);
    if (optenerPaciente != null) {
      return await this.patientRepository.editPaciente(id, updatePatientDto);
    } else {
      return 'el paciente no existe';
    }
  }

  remove(id: number) {
    const optenerPaciente = this.findOne(id);
    if (optenerPaciente != null) {
      return this.patientRepository.deletePaciente(id);
    } else {
      return 'el paciente no existe';
    }
  }
}
