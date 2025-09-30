import { IsString, IsOptional, IsNumberString } from 'class-validator';

export class UpdateAuditDto {
  @IsNumberString()
  @IsOptional()
  year?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
