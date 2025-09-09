// src/donation/donation.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donation])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule], // supaya bisa dipakai di ProgramModule
})
export class DonationModule {}
