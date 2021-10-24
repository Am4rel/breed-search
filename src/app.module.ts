import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { CatsController } from './cats.controller';
import { BreedSearchService } from './breed-search.service';


@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [CatsController],
  providers: [BreedSearchService],
})
export class AppModule {}
