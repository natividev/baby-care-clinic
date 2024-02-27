import { Module } from '@nestjs/common';
import { AuthModule } from './domain/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PatientModule } from './domain/patient/patient.module';
import { AppointmentsModule } from './domain/appointments/appointments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PatientModule,
    AppointmentsModule,
  ],
})
export class AppModule {}
