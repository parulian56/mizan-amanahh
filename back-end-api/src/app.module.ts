import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AuditController } from './audit/audit.controller';
import { AuditService } from './audit/audit.service';
import { AuditReport } from './audit/audit.entity';

import { ProgramController } from './program/program.controller';
import { ProgramService } from './program/program.service';
import { Program } from './program/entities/program.entity';

import { Donation } from './donation/entities/donation.entity'; // ✅ import Donation

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [AuditReport, Program, Donation], // ✅ tambahin Donation
      synchronize: true,
    }),

    TypeOrmModule.forFeature([AuditReport, Program, Donation]), // ✅ tambahin Donation
  ],
  controllers: [AuditController, ProgramController],
  providers: [AuditService, ProgramService],
})
export class AppModule {}
