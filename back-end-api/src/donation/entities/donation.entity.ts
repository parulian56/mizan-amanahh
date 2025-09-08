// src/donation/entities/donation.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Program } from '../../program/entities/program.entity';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  campaign_id: number;

  @Column()
  donor_id: number;

  @Column()
  donation_date: Date;

  @Column({ length: 100 })
  description: string;

  @Column()
  amount: number;

  @ManyToOne(() => Program, (program) => program.donations)
  campaign: Program;
}
