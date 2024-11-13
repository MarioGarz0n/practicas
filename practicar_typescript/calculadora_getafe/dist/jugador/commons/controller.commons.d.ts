import { BaseService } from "./service.commons";
import { Jugador } from "src/jugador/entities/jugador.entity";
import { CreateJugadorDto } from "src/jugador/dto/create-jugador.dto";
export declare abstract class BaseController<T> {
    abstract getService(): BaseService<T>;
    findAll(): Promise<Jugador[]>;
    find(dorsal: number): Promise<Jugador>;
    findNomAp(nombre: string, apellido: string): Promise<Jugador>;
    count(): Promise<number>;
    calculadora(dors1: number, dors2: number, op: string): Promise<string>;
    calcNom(nom1: string, ap1: string, op: string, nom2: string, ap2: string): Promise<string>;
    save(createJugadorDto: CreateJugadorDto): Promise<string | (CreateJugadorDto & Jugador)>;
}
