import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LaporanAudit } from './laporan-audit.entity';

@Entity('auditor')
export class Auditor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  email: string;

  @Column()
  noTelepon: string;

  @OneToMany(() => LaporanAudit, (laporan) => laporan.auditor)
  laporan: LaporanAudit[];
}
