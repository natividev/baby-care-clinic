import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../repository/auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async getUser() {
    return await this.authRepository.getUser();
  }
}
