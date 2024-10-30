import { BaseController } from "src/commons/controller.commons";
import { Jugador } from "../entities/jugador.entity";
import { BaseService } from "src/commons/service.commons";
import { Controller } from "@nestjs/common";
import { JugadorService } from "../service/jugador.service";

@Controller('api/getafe')
export class JugadorController extends BaseController<Jugador>{
    constructor(private readonly jugadorService:JugadorService){
        super();
    }
    
    getService(): BaseService<Jugador> {
        return this.jugadorService;
    }

}