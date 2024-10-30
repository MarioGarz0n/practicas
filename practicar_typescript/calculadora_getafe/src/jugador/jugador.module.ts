import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Jugador } from "./entities/jugador.entity";
import { JugadorService } from "./service/jugador.service";
import { JugadorController } from "./controllers/jugador.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Jugador])],
    providers: [JugadorService],
    controllers: [JugadorController]
})
export class JugadorModule{

}