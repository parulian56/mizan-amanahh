import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LaporanAudit } from './laporan-audit.entity';

@Entity('organisasi')
export class Organisasi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  alamat: string;

  @Column()
  kontak: string;

  @OneToMany(() => LaporanAudit, (laporan) => laporan.organisasi)
  laporan: LaporanAudit[];
}
