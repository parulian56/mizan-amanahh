import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

// sementara hardcode user, nanti sambungin ke DB
const users = [
  { id: 1, username: 'admin', password: '$2b$10$e6Q4T9w2ZBOKs1XrO5p6NOfK5eZbx3dIv0k3r1bJ9l/jO8z6sS3si' }, 
  // password: "123456"
];

@Injectable()
export class AuthService {
  async validateUser(username: string, pass: string) {
    const user = users.find(u => u.username === username);
    if (user && await bcrypt.compare(pass, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    const access_token = jwt.sign(payload, 'SECRET_KEY', { expiresIn: '1h' });
    return { access_token };
  }
}
