import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../repository/auth.repository';
import { AuthDto } from '../dto/auth.dto';
import { SignInDto } from '../dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async signUp(authDto: AuthDto) {
    try {
      return await this.authRepository.signUp(authDto);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async signIn(signInDto: SignInDto) {
    try {
      return await this.authRepository.signIn(signInDto);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
