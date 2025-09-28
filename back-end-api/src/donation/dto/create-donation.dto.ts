// src/donation/dto/create-donation.dto.ts
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateDonationDto {
  @IsInt()
  programId: number;

  @IsInt()
  @IsPositive()
  amount: number;

  @IsString()
  donorName: string;
}
