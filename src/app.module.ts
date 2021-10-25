import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { CatsController } from './cats.controller';
import { BreedSearchService } from './breed-search.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [CatsController, AppController],
  providers: [BreedSearchService, AppService],
})
export class AppModule {}
