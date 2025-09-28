// src/donation/dto/create-donation.dto.ts
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateDonationDto {
  @IsInt()
  programId: number;
<<<<<<< HEAD
  paymentMethod: string;
=======

  @IsInt()
  @IsPositive()
  amount: number;

  @IsString()
  donorName: string;
>>>>>>> 0585e7b3148f59df1539774a03c2df8589b6c39c
}
