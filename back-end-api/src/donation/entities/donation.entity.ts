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

  @ManyToOne(() => Program, (program) => program.donations, { onDelete: 'CASCADE' })
  program: Program;
}
