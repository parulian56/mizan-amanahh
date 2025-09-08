// src/program/dto/create-program.dto.ts
import { IsString, IsInt, IsDate } from 'class-validator';

export class CreateProgramDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsInt()
  collected_donation: number;

  @IsInt()
  donation_target: number;

  @IsDate()
  start_date: Date;

  @IsDate()
  end_date: Date;

  @IsInt()
  remaining_days: number;

  @IsString()
  category_program: string;

  @IsString()
  payment_method_id: string;

  @IsString()
  image: string;
}
