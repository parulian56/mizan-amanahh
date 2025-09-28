import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Article> {
    return this.articleService.findOne(+id);
  }

  @Post()
  create(@Body() data: Partial<Article>): Promise<Article> {
    return this.articleService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Article>) {
    return this.articleService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
