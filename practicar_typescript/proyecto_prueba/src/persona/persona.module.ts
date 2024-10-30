import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Persona } from "./entities/persona.entity";
import { PersonaService } from "./service/persona.servcice";
import { PersonaController } from "./controllers/persona.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Persona])],
    providers: [PersonaService],
    controllers: [PersonaController]
})
export class PersonaModule{

}