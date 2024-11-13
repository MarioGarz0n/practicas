import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorModule } from './jugador/jugador.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ //configuración con la base de datos
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'GetafeCF1$',
      database: 'pruebas_db',
      autoLoadEntities: true
    }),
    JugadorModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
