import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from '../dto/create-paciente.dto';
import { UpdatePacienteDto } from '../dto/update-paciente.dto';
import { PacienteRepository } from '../repository/paciente.repository';

@Injectable()
export class PacienteService {
  constructor(private readonly pacienteRepository: PacienteRepository) {}
  async create(createPacienteDto: CreatePacienteDto) {
    try {
      return await this.pacienteRepository.createPaciente(createPacienteDto);
    } catch (error) {
      console.log();
      throw error;
    }
  }

  findAll() {
    return this.pacienteRepository.getPacientes();
  }

  findAllInactive() {
    return this.pacienteRepository.getPacientesInactivos();
  }

  async findOne(id: number) {
    return await this.pacienteRepository.getPacienteById(id);
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    const optenerPaciente = this.findOne(id);
    if (optenerPaciente != null) {
      return await this.pacienteRepository.editPaciente(id, updatePacienteDto);
    } else {
      return 'el paciente no existe';
    }
  }

  remove(id: number) {
    const optenerPaciente = this.findOne(id);
    if (optenerPaciente != null) {
      return this.pacienteRepository.deletePaciente(id);
    } else {
      return 'el paciente no existe';
    }
  }
}
