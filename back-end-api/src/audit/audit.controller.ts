import { Controller, Get, Post, Put, Delete, Param, Body, UploadedFile, UseInterceptors, BadRequestException, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuditService } from './audit.service';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import type { Response } from 'express';
import * as fs from 'fs';

@Controller('api/audit')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Get()
  async getAllReports() {
    return await this.auditService.findAll();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/audit-reports',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        cb(null, `${randomName}${extname(file.originalname)}`);
      }
    }),
    fileFilter: (req, file, cb) => {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new BadRequestException('Only PDF files are allowed'), false);
      }
    },
    limits: {
      fileSize: 10 * 1024 * 1024,
    }
  }))
  async uploadReport(
    @UploadedFile() file: Express.Multer.File,
    @Body('year') year: string,
    @Body('description') description: string
  ) {
    if (!file) throw new BadRequestException('File is required');
    if (!year) throw new BadRequestException('Year is required');

    return await this.auditService.create({
      year,
      description,
      fileName: file.filename,
      filePath: file.path,
      originalName: file.originalname,
      fileSize: file.size
    });
  }

  @Get(':id')
  async getReport(@Param('id') id: string) {
    return await this.auditService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/audit-reports',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        cb(null, `${randomName}${extname(file.originalname)}`);
      }
    }),
    fileFilter: (req, file, cb) => {
      if (!file || file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new BadRequestException('Only PDF files are allowed'), false);
      }
    }
  }))
  async updateReport(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('year') year: string,
    @Body('description') description: string
  ) {
    const updateData: any = { year, description };
    
    if (file) {
      updateData.fileName = file.filename;
      updateData.filePath = file.path;
      updateData.originalName = file.originalname;
      updateData.fileSize = file.size;
    }

    return await this.auditService.update(id, updateData);
  }

  @Delete(':id')
  async deleteReport(@Param('id') id: string) {
    return await this.auditService.remove(id);
  }

  @Get('file/:filename')
  async getFile(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(process.cwd(), 'uploads', 'audit-reports', filename);
    
    if (!fs.existsSync(filePath)) {
      throw new BadRequestException('File not found');
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${filename}"`);
    
    return res.sendFile(filePath);
  }
}