import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditReport } from './audit.entity';
import * as fs from 'fs';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(AuditReport)
    private readonly auditRepository: Repository<AuditReport>,
  ) {}

  async findAll(): Promise<AuditReport[]> {
    return await this.auditRepository.find({
      order: { year: 'DESC' }
    });
  }

  async findOne(id: string): Promise<AuditReport> {
    const report = await this.auditRepository.findOne({ where: { id } });
    if (!report) {
      throw new NotFoundException('Audit report not found');
    }
    return report;
  }

  async create(data: Partial<AuditReport>): Promise<AuditReport> {
    const report = this.auditRepository.create(data);
    return await this.auditRepository.save(report);
  }

  async update(id: string, data: Partial<AuditReport>): Promise<AuditReport> {
    const report = await this.findOne(id);
    
    if (data.fileName && report.fileName !== data.fileName) {
      this.deleteFile(report.filePath);
    }

    Object.assign(report, data);
    return await this.auditRepository.save(report);
  }

  async remove(id: string): Promise<void> {
    const report = await this.findOne(id);
    this.deleteFile(report.filePath);
    await this.auditRepository.remove(report);
  }

  private deleteFile(filePath: string): void {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}