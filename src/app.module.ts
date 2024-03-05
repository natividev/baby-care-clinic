import { Module } from '@nestjs/common';
import { AuthModule } from './domain/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PatientModule } from './domain/patient/patient.module';
import { MedicModule } from './domain/medic/medic.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PatientModule,
    MedicModule,
  ],
})
export class AppModule {}
