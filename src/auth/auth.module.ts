import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module'; 
import { JwtStrategy } from './jwtstrategy';

@Module({
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
