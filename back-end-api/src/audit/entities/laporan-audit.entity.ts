import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Auditor } from './auditor.entity';
import { Organisasi } from './organisasi.entity';
import { StatusAudit } from './status-audit.entity';
import { DokumenLaporan } from './dokumen-laporan.entity';

@Entity('laporan_audit')
export class LaporanAudit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judul: string;

  @Column({ type: 'text' })
  deskripsi: string;

  @Column({ type: 'date' })
  tanggal: Date;

  @ManyToOne(() => Auditor, (auditor) => auditor.laporan)
  auditor: Auditor;

  @ManyToOne(() => Organisasi, (organisasi) => organisasi.laporan)
  organisasi: Organisasi;

  @ManyToOne(() => StatusAudit, (status) => status.laporan)
  status: StatusAudit;

  @OneToMany(() => DokumenLaporan, (dokumen) => dokumen.laporan)
  dokumen: DokumenLaporan[];
}
