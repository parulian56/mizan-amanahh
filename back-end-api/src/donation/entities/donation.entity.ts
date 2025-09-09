import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Program } from '../../program/entities/program.entity';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  donor_name: string;

  @Column()
  amount: number;

  @ManyToOne(() => Program, (program) => program.donations)
  program: Program;
}
