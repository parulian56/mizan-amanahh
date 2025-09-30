import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditModule } from './audit/audit.module'; // 👈 import modul Audit

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'raihamzu',
      database: 'audit_db',
      autoLoadEntities: true, // otomatis detect entity dari semua module
      synchronize: true, // buat tabel otomatis
    }),
    AuditModule, // 👈 daftarkan modul Audit di sini
  ],
})
export class AppModule {}
