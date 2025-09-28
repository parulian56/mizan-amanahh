import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async findOne(id: number): Promise<Article> {
    const article = await this.articleRepository.findOneBy({ id });
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }

  async create(data: Partial<Article>): Promise<Article> {
    const article = this.articleRepository.create(data);
    return this.articleRepository.save(article);
  }

  async update(id: number, data: Partial<Article>): Promise<Article> {
    const article = await this.findOne(id); // kalau ga ada → otomatis 404
    Object.assign(article, data);
    return this.articleRepository.save(article);
  }

  async remove(id: number): Promise<Article> {
    const article = await this.findOne(id); // kalau ga ada → otomatis 404
    return this.articleRepository.remove(article);
  }
}
