import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async findByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  async createUser(username: string, password: string, firstname:string, lastname: string,
    email: string, nik: string, npwp: string, gender: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    //check if user already exists
    const userExists = await this.findByUsername(username);
    
    if (userExists) {
      throw new BadRequestException('User already exists with this username');
    }
    else {
      const user = this.userRepository.create({ username, password: hashedPassword, firstname, lastname,
        email, nik, npwp, gender
       });
      return this.userRepository.save(user);
    }
  }
}
