import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LaporanAudit } from './laporan-audit.entity';

@Entity('status_audit')
export class StatusAudit {   // <-- pastikan namanya "StatusAudit"
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namaStatus: string;

  @OneToMany(() => LaporanAudit, (laporan) => laporan.status)
  laporan: LaporanAudit[];
}
