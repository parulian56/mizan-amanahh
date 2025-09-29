import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeritaService } from './berita.service';
import { BeritaController } from './berita.controller';
import { Berita } from './entities/berita.entity'; // <- sesuaikan jika nama entity berbeda

@Module({
  imports: [TypeOrmModule.forFeature([Berita])], // wajib jika pakai TypeORM
  controllers: [BeritaController],
  providers: [BeritaService],
  exports: [BeritaService], // optional, hanya jika ingin digunakan module lain
})
export class BeritaModule {}
