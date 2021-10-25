import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, forkJoin, map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'This is Oleg';
  }

  getAll(): Observable<Object> {
    const response: Observable<Object> = forkJoin({
      Ivan: this.httpService.get(`https://f0a2-193-161-14-38.ngrok.io`).pipe(
        map(res => res.data),
        catchError(error => error.toJSON().message)),
      Liza: this.httpService.get(`https://3499-212-90-60-240.ngrok.io/`).pipe(
        map(res => res.data),
        catchError(error => error.toJSON().message)),
      Lidiia: this.httpService.get(`http://cffa-46-219-240-124.ngrok.io/`).pipe(
        map(res => res.data),
        catchError(error => error.toJSON().message)),
      Nikita: this.httpService.get(`https://3d18-188-163-73-40.ngrok.io`).pipe(
        map(res => res.data),
        catchError(error => error.toJSON().message)),
    })

    return response.pipe(map(res => res));
  }
}