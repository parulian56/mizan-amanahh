import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donation } from './entities/donation.entity';
import { Program } from '../program/entities/program.entity';
import { CreateDonationDto } from './dto/create-donation.dto';

@Injectable()
export class DonationService {
  constructor(
    @InjectRepository(Donation)
    private readonly donationRepository: Repository<Donation>,

    @InjectRepository(Program)
    private readonly programRepository: Repository<Program>,
  ) {}

  async create(dto: CreateDonationDto) {
    try {
      console.log('>>> Payload Donasi:', dto);

      const program = await this.programRepository.findOne({
        where: { id: dto.programId },
      });
      if (!program) {
        throw new Error(`Program dengan id ${dto.programId} tidak ditemukan`);
      }

      const donation = this.donationRepository.create({
        donorName: dto.donorName,
        amount: dto.amount,
        program,
      });
      await this.donationRepository.save(donation);

      program.collected_donation += dto.amount;
      await this.programRepository.save(program);

      return { message: 'Donasi berhasil!', donation, program };
    } catch (error) {
      console.error('>>> Error Donasi:', error);
      throw error;
    }
  }
}
