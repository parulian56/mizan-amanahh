import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Berita } from './entities/berita.entity'; // Sesuaikan path jika berbeda
import { CreateBeritaDto } from './dto/create-berita.dto';
import { UpdateBeritaDto } from './dto/update-berita.dto';

@Injectable()
export class BeritaService {
  constructor(
    @InjectRepository(Berita)
    private readonly beritaRepository: Repository<Berita>,
  ) {}

  create(createBeritaDto: CreateBeritaDto): Promise<Berita> {
    const berita = this.beritaRepository.create(createBeritaDto);
    return this.beritaRepository.save(berita);
  }

  findAll(): Promise<Berita[]> {
    return this.beritaRepository.find();
  }

  async findOne(id: number): Promise<Berita> {
    const berita = await this.beritaRepository.findOne({
      where: { id },
    });
    if (!berita) {
      throw new Error(`Berita with id ${id} not found`);
    }
    return berita;
  }

  async update(id: number, updateBeritaDto: UpdateBeritaDto): Promise<Berita> {
    await this.beritaRepository.update(id, updateBeritaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.beritaRepository.delete(id);
  }
}
