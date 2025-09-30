import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditReport } from './entities/audit.entity';
import { AuditService } from './audit.service';
import { AuditController } from './audit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AuditReport])],
  controllers: [AuditController],
  providers: [AuditService],
})
export class AuditModule {}
