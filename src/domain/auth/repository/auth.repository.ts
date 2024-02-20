import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthDto } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SignInDto } from '../dto/signin.dto';

@Injectable()
export class AuthRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async signUp(authDto: AuthDto) {
    const { email, password, userName, name } = authDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.prisma.usuarios.create({
      data: {
        nombre: name,
        correo: email,
        password: hashedPassword,
        usuario: userName,
      },
    });
    return this.signToken(user.id, user.correo, user.usuario);
  }

  async signIn(signInDto: SignInDto) {
    const { userName, password } = signInDto;
    const user = await this.prisma.usuarios.findUnique({
      where: {
        usuario: userName,
      },
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Credenciales incorrectas');
    }

    return this.signToken(user.id, user.correo, user.usuario);
  }
  async signToken(userId: number, email: string, usuario: string) {
    const payload = {
      sub: userId,
      email,
      usuario,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = this.jwtService.sign(payload, {
      expiresIn: '1d',
      secret,
    });

    return {
      access_token: token,
    };
  }
}
