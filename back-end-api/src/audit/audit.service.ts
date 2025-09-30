import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditReport } from './entities/audit.entity';
import { CreateAuditDto } from './dto/create-audit.dto';
import { UpdateAuditDto } from './dto/update-audit.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(AuditReport)
    private auditRepository: Repository<AuditReport>,
  ) {}

  async findAll(): Promise<AuditReport[]> {
    return this.auditRepository.find({ order: { year: 'DESC' } });
  }

  async create(
    createDto: CreateAuditDto,
    file: Express.Multer.File,
  ): Promise<AuditReport> {
    const newReport = this.auditRepository.create({
      ...createDto,
      filePath: file.filename,
    }) as AuditReport;

    return await this.auditRepository.save(newReport);
  }

  async update(
    id: string,
    updateDto: UpdateAuditDto,
    file?: Express.Multer.File,
  ): Promise<AuditReport> {
    const report = await this.auditRepository.findOneBy({ id });
    if (!report) throw new NotFoundException(`Laporan dengan ID ${id} tidak ditemukan`);

    if (file) {
      if (report.filePath) {
        const oldFilePath = path.join(process.cwd(), 'uploads', report.filePath);
        if (fs.existsSync(oldFilePath)) fs.unlinkSync(oldFilePath);
      }
      report.filePath = file.filename;
    }

    Object.assign(report, updateDto);
    return await this.auditRepository.save(report);
  }

  async remove(id: string): Promise<{ deleted: boolean; message?: string }> {
    const report = await this.auditRepository.findOneBy({ id });
    if (!report) throw new NotFoundException(`Laporan dengan ID ${id} tidak ditemukan`);

    if (report.filePath) {
      const filePath = path.join(process.cwd(), 'uploads', report.filePath);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await this.auditRepository.delete(id);
    return { deleted: true };
  }
}
