import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Donation } from '../../../donation/entities/donation.entity';

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ default: 0 })
  collected_donation: number;

  @Column()
  donation_target: number;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @Column()
  remaining_days: number;

  @Column()
  category_program: string;

  @OneToMany(() => Donation, (donation) => donation.program)
  donations: Donation[];
}
