import { Body, Controller, Post } from '@nestjs/common';
import { DonationService } from './donation.service';
import { CreateDonationDto } from './dto/create-donation.dto';

@Controller('donations') // penting! plural
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  create(@Body() dto: CreateDonationDto) {
    return this.donationService.create(dto);
  }
}
