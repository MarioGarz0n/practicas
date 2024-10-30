import { BaseService } from "src/commons/service.commons";
import { Jugador } from "../entities/jugador.entity";
import { Repository } from "typeorm";
export declare class JugadorService extends BaseService<Jugador> {
    private jugadorRepo;
    constructor(jugadorRepo: Repository<Jugador>);
    getRepository(): Repository<Jugador>;
}
