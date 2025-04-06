import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  validateUser(username: string, pass: string): any {
    const user = this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user; // Exclude password from the result
      return result;
    }
    return null;
  }
}
