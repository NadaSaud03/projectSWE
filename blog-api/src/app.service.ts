import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {constructor(@Inject(ConfigService) private configService: ConfigService) {}

getJwtSecret(): string {
  return this.configService.get('NMAHA1');
}

getDatabaseUrl(): string {
  return this.configService.get('mysql://root:1122N@127.0.0.1:3306/nest-test-now');
}
  
  getHello(): string {
    return 'Hello World!';
  }
}
