import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { LoginUserDto } from './login-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
   
     async createUser(createUserDto: CreateUserDto): Promise<User> {
       const newUser = this.userRepository.create(createUserDto);
       return   
    this.userRepository.save(newUser);   
   
     }
     async validateUser(loginUserDto: LoginUserDto): Promise<User   
     | null> {
        const user = await this.userRepository.findOneBy({ username: loginUserDto.username });
        if (user && await bcrypt.compare(loginUserDto.password, user.password)) {
          return user;
        }
        return null;} }
