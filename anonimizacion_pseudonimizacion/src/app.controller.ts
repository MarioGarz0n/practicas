import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('index')
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Get('formulario')
  @Render('formulario')
  cargar_form() {
  }

  @Post('anonimizacion')
  @Render('datos_anom')
  anonimizar(@Body() datos:any) {
    let datos_anom = {}; 
    Object.assign(datos_anom, datos); //se hace una copia de los datos, y se anonimizan estos
    
    datos_anom = this.appService.anonimizacion(datos_anom);

    return{
      datos,
      datos_anom
    }
  }

  @Post('pseudonimizacion')
  @Render('datos_pseudo')
  pseudonimizar(@Body() datos:any) {
    let datos_pseudo = {}; 
    let datos_descf = {};
    Object.assign(datos_pseudo, datos); //se hace una copia de los datos, y se pseudonimizan estos
    Object.assign(datos_descf, datos);
    
    datos_pseudo = this.appService.pseudonimizacion(datos_pseudo,datos_descf);

    return{
      datos,
      datos_pseudo,
      datos_descf
    }
  }
}
