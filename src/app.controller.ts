import { Controller, Get } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/all")
  getAll(): Observable<any> {
    return this.appService.getAll();
  }
}
