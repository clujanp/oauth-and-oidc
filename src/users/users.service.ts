import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    new User('H4sh01', 'john', 'changeme'),
    new User('H4sh02', 'maria', 'guess'),
  ];

  create(createUserDto: CreateUserDto): User {
    const newUser = new User(
      Math.random().toString(36).substring(2, 15),
      createUserDto.username,
      createUserDto.password,
    );
    const existingUser = this.users.find(
      (user) => user.username === createUserDto.username,
    );
    if (existingUser) {
      throw new Error(
        `User with username ${createUserDto.username} already exists`
      );
    }
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    if (this.users.length === 0) {
      throw new Error('No users found');
    }
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error(`User with id ${id} not found`);
    }
    const updatedUser = { ...this.users[userIndex], ...updateUserDto };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: string): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error(`User with id ${id} not found`);
    }
    this.users.splice(userIndex, 1);
    console.log(`User with id ${id} removed`);
  }

  findByUsername(username: string): User {
    const user = this.users.find((user) => user.username === username);
    if (!user) {
      throw new Error(`User with username ${username} not found`);
    }
    return user;
  }
}
