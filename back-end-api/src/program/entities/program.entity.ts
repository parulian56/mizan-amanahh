import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Donation } from '../../donation/entities/donation.entity';

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

  // Ubah dari 'date' → 'timestamptz'
  // Biar bisa handle format 'YYYY-MM-DD' dan juga ISO datetime
  @Column({ type: 'timestamptz' })
  start_date: Date;

  @Column({ type: 'timestamptz' })
  end_date: Date;

  @Column()
  remaining_days: number;

  @Column()
  category_program: string;

  @OneToMany(() => Donation, (donation) => donation.program)
  donations: Donation[];
}
