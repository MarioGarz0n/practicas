import { BaseController } from "src/commons/controller.commons";
import { Persona } from "../entities/persona.entity";
import { BaseService } from "src/commons/service.commons";
import { PersonaService } from "../service/persona.servcice";
export declare class PersonaController extends BaseController<Persona> {
    private readonly personaService;
    constructor(personaService: PersonaService);
    getService(): BaseService<Persona>;
}
