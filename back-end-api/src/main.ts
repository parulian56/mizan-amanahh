import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Prefix global untuk semua route
  app.setGlobalPrefix('api');

  // ✅ Aktifkan CORS supaya bisa diakses dari frontend (Nuxt/React/Angular, dsb.)
  app.enableCors();

  // ✅ Global ValidationPipe untuk validasi DTO (class-validator)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // hanya field yang ada di DTO yang diterima
      forbidNonWhitelisted: true, // kalau ada field asing → error
      transform: true,            // otomatis konversi tipe data (string ke number, dll.)
    }),
  );

  // ✅ Jalankan server
  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`🚀 Server running on http://localhost:${port}/api`);
}
bootstrap();
