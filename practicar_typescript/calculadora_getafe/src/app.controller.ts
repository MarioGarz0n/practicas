import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ejemplo plantilla NestJS')
@Controller('api/ejemplo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('holaMundo')
  getHello(): string {
    return this.appService.getHello();
  }
}
