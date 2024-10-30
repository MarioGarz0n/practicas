import { BaseService } from "src/commons/service.commons";
import { Persona } from "../entities/persona.entity";
import { Repository } from "typeorm";
export declare class PersonaService extends BaseService<Persona> {
    private personaRepo;
    constructor(personaRepo: Repository<Persona>);
    getRepository(): Repository<Persona>;
}
