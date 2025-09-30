import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramModule } from './program/program.module';
import { DonationModule } from './donation/donation.module';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';

@Module({
imports: [
TypeOrmModule.forRoot({
type: 'postgres',
host: 'localhost',
port: 5432,
username: 'postgres',
password: 'raihansami140707',
database: 'ibadurrohman',
autoLoadEntities: true,
synchronize: true, // ❌ jangan aktifkan di production
}),
ProgramModule,
DonationModule,
AuthModule,
ArticleModule, // ✅ tambahin di sini
],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
