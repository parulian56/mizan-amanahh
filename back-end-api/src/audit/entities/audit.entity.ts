import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('audit_reports')
export class AuditReport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  year: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  filePath: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
