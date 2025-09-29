import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Program } from '../program/dto/entities/program.entity';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private readonly programRepository: Repository<Program>,
  ) {}

  create(createProgramDto: CreateProgramDto): Promise<Program> {
    const program = this.programRepository.create(createProgramDto);
    return this.programRepository.save(program);
  }

  findAll(): Promise<Program[]> {
    return this.programRepository.find({ relations: ['donations'] });
  }

  async findOne(id: number): Promise<Program> {
    const program = await this.programRepository.findOne({
      where: { id },
      relations: ['donations'],
    });
    if (!program) {
      throw new Error(`Program with id ${id} not found`);
    }
    return program;
  }

  async update(id: number, updateProgramDto: UpdateProgramDto): Promise<Program> {
    await this.programRepository.update(id, updateProgramDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.programRepository.delete(id);
  }
}
