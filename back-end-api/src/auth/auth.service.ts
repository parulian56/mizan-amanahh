import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { RegisterDto, LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const hash = await bcrypt.hash(dto.password, 10);
    const user = this.userRepo.create({ username: dto.username, password: hash });
    return this.userRepo.save(user);
  }

  async login(dto: LoginDto) {
    const user = await this.userRepo.findOne({ where: { username: dto.username } });
    if (!user) throw new UnauthorizedException('User not found');

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, username: user.username };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
