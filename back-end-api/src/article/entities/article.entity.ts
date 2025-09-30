import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
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
category_article: string;
}
