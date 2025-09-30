import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuditService } from './audit.service';
import { CreateAuditDto } from './dto/create-audit.dto';
import { UpdateAuditDto } from './dto/update-audit.dto';
import { AuditReport } from './entities/audit.entity';
import { diskStorage } from 'multer';
import * as path from 'path';

const multerOptions = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      cb(null, `${randomName}${path.extname(file.originalname)}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(
        new HttpException('Hanya file PDF yang diizinkan!', HttpStatus.BAD_REQUEST),
        false,
      );
    }
    cb(null, true);
  },
};

@Controller('audit') // ✅ cukup 'audit' karena sudah ada global prefix 'api'
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadReport(
    @UploadedFile() file: Express.Multer.File,
    @Body() createAuditDto: CreateAuditDto,
  ): Promise<AuditReport> {
    if (!file) {
      throw new HttpException('File PDF wajib diunggah', HttpStatus.BAD_REQUEST);
    }
    return this.auditService.create(createAuditDto, file);
  }

  @Get()
  async findAllReports(): Promise<AuditReport[]> {
    return this.auditService.findAll();
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async updateReport(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateAuditDto: UpdateAuditDto,
  ): Promise<AuditReport> {
    return this.auditService.update(id, updateAuditDto, file);
  }

  @Delete(':id')
  async deleteReport(@Param('id') id: string) {
    return this.auditService.remove(id);
  }
}
