import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';
import { Program } from '../berita/dto/entities/program.entity';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Donation, Program])], // ⬅️ tambahin Program di sini
  controllers: [DonationController],
  providers: [DonationService],
})
export class DonationModule {}
