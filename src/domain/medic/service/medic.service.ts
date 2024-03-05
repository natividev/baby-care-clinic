import { Injectable } from '@nestjs/common';
import { CreateMedicDto } from '../dto/create-medic.dto';
import { UpdateMedicDto } from '../dto/update-medic.dto';
import { MedicRepository } from '../repository/medic.repository';

@Injectable()
export class MedicService {
  constructor(private readonly medicRepository: MedicRepository) {}
  async create(createMedicDto: CreateMedicDto) {
    return await this.medicRepository.createMedic(createMedicDto);
  }

  async findAll() {
    return await this.medicRepository.getMedics();
  }

  async findAllInactives() {
    return await this.medicRepository.getInactiveMedics();
  }

  async findOne(id: number) {
    const medic = await this.medicRepository.getMedicById(id);

    return medic ?? { error: `Médico con ID: ${id} no existe` };
  }

  async update(id: number, updateMedicDto: UpdateMedicDto) {
    return await this.medicRepository.editMedic(id, updateMedicDto);
  }

  async remove(id: number) {
    return await this.medicRepository.deleteMedic(id);
  }
}
