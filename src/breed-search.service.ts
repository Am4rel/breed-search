import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class BreedSearchService {
  constructor(private httpService: HttpService) {}

  findBreed(query: string, api: string): Observable<Object[]>{
    return this.httpService.get(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, {
      headers: {
        'x-api-key': api
      }
    }).pipe(map(res => res.data))
  }
}
