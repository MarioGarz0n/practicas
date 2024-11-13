import { BaseService } from "src/jugador/commons/service.commons";
import { Jugador } from "../entities/jugador.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

export class JugadorService extends BaseService<Jugador>{
    constructor(@InjectRepository(Jugador) private jugadorRepo: Repository<Jugador>){
        super();
    }
    
    getRepository(): Repository<Jugador> {
        return this.jugadorRepo;
    }

}