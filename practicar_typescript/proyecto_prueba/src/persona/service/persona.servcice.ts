import { BaseService } from "src/commons/service.commons";
import { Persona } from "../entities/persona.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

export class PersonaService extends BaseService<Persona>{
    
    constructor(@InjectRepository(Persona) private personaRepo : Repository<Persona>){
        super();
    }
    
    getRepository(): Repository<Persona> {
        return this.personaRepo;
    }
}