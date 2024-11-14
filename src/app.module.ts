import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingController } from './booking/booking.controller';
import { BookingService } from './booking/booking.service';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment/entities/payment.entity';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [BookingModule, PaymentModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '1122N',
    database: 'nest-test-connection',
    entities: [Payment],
    synchronize: true,
  }), UsersModule, ArticlesModule, AuthModule,],
  controllers: [AppController, BookingController],
  providers: [AppService, BookingService],
})
export class AppModule {}
