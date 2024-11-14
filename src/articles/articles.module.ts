import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  providers: [ArticlesService],
  controllers: [ArticlesController]
})
export class ArticlesModule {}
