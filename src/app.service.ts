import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nada';
  }
  getHelloWorld(): string {
return 'hello guys';
  }
  printHelloTouser(name:string):string{
    return 'welcome to '+name;
  }
}
