import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('qurban_donors')
export class QurbanDonor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nama: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 15, nullable: true })
  whatsapp: string;

  @Column({ length: 200, nullable: true })
  alamat: string;

  @Column({ type: 'enum', enum: ['sapi', 'kambing'], default: 'kambing' })
  jenisHewan: 'sapi' | 'kambing';

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  nominal: number;

  @CreateDateColumn()
  createdAt: Date;
}
