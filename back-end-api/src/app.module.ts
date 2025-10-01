import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditController } from './audit/audit.controller';
import { AuditService } from './audit/audit.service';
import { AuditReport } from './audit/audit.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'raihamzu',
      database: 'audit_db',
      entities: [AuditReport],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([AuditReport]),
  ],
  controllers: [AuditController],
  providers: [AuditService],
})
export class AppModule {}