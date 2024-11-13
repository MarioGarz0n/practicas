import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Calculadora de jugadores')
    .setDescription('La descripción de una API para calcular jugadores y operaciones relacionadas')
    .setVersion('1.0')
    //.addTag('Getafe C.F.')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docu',app,documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
