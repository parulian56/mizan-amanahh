import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Program } from '../../program/entities/program.entity';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  donorName: string;

  @Column({ type: 'decimal' })
  amount: number;

  @Column({ default: 'transfer' }) // ⬅️ default biar ga error null
  paymentMethod: string;

  @ManyToOne(() => Program, (program) => program.donations, { onDelete: 'CASCADE' })
  program: Program;
}
