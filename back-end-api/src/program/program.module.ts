import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { Program } from '../berita/dto/entities/program.entity';
import { Donation } from '../donation/entities/donation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Program, Donation])], // ⬅️ tambahin Donation
  controllers: [ProgramController],
  providers: [ProgramService],
})
export class ProgramModule {}
