export class CreateDonationDto {
  @IsInt()
  program_id: number;

  @IsInt()
  @IsPositive()
  amount: number;
  programId: number;
}
