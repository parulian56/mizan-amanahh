import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BeritaService } from './berita.service';
import { CreateBeritaDto } from './dto/create-berita.dto';
import { UpdateBeritaDto } from './dto/update-berita.dto';

@Controller('berita')
export class BeritaController {
  constructor(private readonly beritaService: BeritaService) {}

  @Post()
  create(@Body() createBeritaDto: CreateBeritaDto) {
    return this.beritaService.create(createBeritaDto);
  }

  @Get()
  findAll() {
    return this.beritaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beritaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeritaDto: UpdateBeritaDto) {
    return this.beritaService.update(+id, updateBeritaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beritaService.remove(+id);
  }
}
