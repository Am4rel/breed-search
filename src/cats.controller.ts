import { Controller, Get, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { BreedSearchService } from './breed-search.service';

@Controller('/cats')
export class CatsController {
  constructor(private readonly breedSearchService: BreedSearchService, private configService: ConfigService) {}

  @Get()
  getBreed(@Query("breed") breed: string): Observable<Object[]> {
    const apikey = this.configService.get("API_KEY");

    return this.breedSearchService.findBreed(breed, apikey);
  }
}
