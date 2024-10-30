import { BaseController } from "src/commons/controller.commons";
import { Jugador } from "../entities/jugador.entity";
import { BaseService } from "src/commons/service.commons";
import { JugadorService } from "../service/jugador.service";
export declare class JugadorController extends BaseController<Jugador> {
    private readonly jugadorService;
    constructor(jugadorService: JugadorService);
    getService(): BaseService<Jugador>;
}
