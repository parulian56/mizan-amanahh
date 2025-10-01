import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
@PrimaryGeneratedColumn()
id: number;

@Column()
title: string;

@Column({ type: 'text' })
content: string;

@Column()
category_article: string;
}
