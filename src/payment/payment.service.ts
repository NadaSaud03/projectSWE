import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(@InjectRepository(Payment) public paymentsRepo:Repository<Payment> ,){}
  async create(createPaymentDto: CreatePaymentDto) {
    const response=await this.paymentsRepo.save(createPaymentDto);
    return response;
  }

  findAll() {
    const payments = this.paymentsRepo.find();
    return payments;
   // return `This action returns all payment`;
  }
//
  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
