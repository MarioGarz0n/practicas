import { BaseController } from "src/jugador/commons/controller.commons";
import { Jugador } from "../entities/jugador.entity";
import { BaseService } from "src/jugador/commons/service.commons";
import { Controller } from "@nestjs/common";
import { JugadorService } from "../service/jugador.service";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Equipo')
@ApiBearerAuth()
@ApiResponse({ status: 201, description: 'The record has been successfully created.'})
@ApiResponse({ status: 403, description: 'Forbidden.'})
@Controller('api/getafe')
export class JugadorController extends BaseController<Jugador>{
    constructor(private readonly jugadorService:JugadorService){
        super();
    }
    
    getService(): BaseService<Jugador> {
        return this.jugadorService;
    }

}