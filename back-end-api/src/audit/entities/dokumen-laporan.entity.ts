import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { LaporanAudit } from './laporan-audit.entity';

@Entity('dokumen_laporan')
export class DokumenLaporan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namaFile: string;

  @Column()
  urlFile: string;

  @ManyToOne(() => LaporanAudit, (laporan) => laporan.dokumen, { onDelete: 'CASCADE' })
  laporan: LaporanAudit;
}
