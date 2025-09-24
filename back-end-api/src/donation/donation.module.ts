// src/donation/donation.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Donation])],
  controllers: [DonationController],
  providers: [DonationService],
  exports: [TypeOrmModule], // supaya bisa dipakai di ProgramModule
})
export class DonationModule {}
