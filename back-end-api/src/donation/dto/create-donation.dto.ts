import { IsInt, IsPositive } from "class-validator";

export class CreateDonationDto {
  @IsInt()
  program_id: number;

  @IsInt()
  @IsPositive()
  amount: number;
}
