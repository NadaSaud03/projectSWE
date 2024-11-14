import { Entity } from "typeorm";
import {  Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({nullable:true})
    currency: string;
  
    @Column({nullable:true})
    amount: number;
  
    @Column({ default: true })
    isActive: boolean;


}
