// src/program/entities/program.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany
} from 'typeorm';
import { Donation } from '../../donation/entities/donation.entity';

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  content: string;

  @Column()
  collected_donation: number;

  @Column()
  donation_target: number;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  remaining_days: number;

  @Column({ length: 100 })
  category_program: string;

  @Column({ length: 100 })
  payment_method_id: string;

  @Column({ length: 255 })
  image: string;

  @OneToMany(() => Donation, (donation) => donation.campaign)
  donations: Donation[];
}
