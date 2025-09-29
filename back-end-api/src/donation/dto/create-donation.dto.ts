// src/donation/dto/create-donation.dto.ts
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateDonationDto {
  @IsInt()
  programId: number;

  @IsString()
  paymentMethod: string;

  @IsInt()
  @IsPositive()
  amount: number;

  @IsString()
  donorName: string;
}
