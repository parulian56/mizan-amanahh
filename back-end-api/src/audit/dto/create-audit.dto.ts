import { IsNotEmpty, IsString, IsOptional, IsNumberString } from 'class-validator';

export class CreateAuditDto {
  @IsNumberString()
  @IsNotEmpty()
  year: string; 

  @IsString()
  @IsOptional()
  description: string; 
}