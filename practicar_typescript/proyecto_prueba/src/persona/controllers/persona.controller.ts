import { BaseController } from "src/commons/controller.commons";
import { Persona } from "../entities/persona.entity";
import { BaseService } from "src/commons/service.commons";
import { PersonaService } from "../service/persona.servcice";
import { Controller } from "@nestjs/common";

@Controller('api/persona')
export class PersonaController extends BaseController<Persona>{
    constructor(private readonly personaService: PersonaService){
        super();
    }
    
    getService(): BaseService<Persona> {
        return this.personaService;
    }

}