import { Body, Controller, Get, Param, Post, Query,Req,Res} from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/hello-world")
  getHelloworld(){
    return this.appService.getHelloWorld();
  }
  @Post ('/hello')
  postHello(@Body("name") name:string,@Req()req,@Res()res)
  {
    res.send(req.body);
    //return this.appService.printHelloTouser(name);

  }
}
