import { CreateJugadorDto } from "src/jugador/dto/create-jugador.dto";
import { Jugador } from "src/jugador/entities/jugador.entity";
import { FindManyOptions, Repository } from "typeorm";
export declare abstract class BaseService<T> {
    abstract getRepository(): Repository<Jugador>;
    findAll(): Promise<Jugador[]>;
    findOne(id: number): Promise<Jugador>;
    findByNombreApellido(nombre: string, apellido: string): Promise<Jugador>;
    count(options?: FindManyOptions<Jugador>): Promise<number>;
    suma(dors1: number, dors2: number): Promise<string>;
    resta(dors1: number, dors2: number): Promise<string>;
    calculadora(dors1: number, dors2: number, operador: string): Promise<string>;
    sumaNom(nom1: string, ap1: string, nom2: string, ap2: string): Promise<string>;
    restaNom(nom1: string, ap1: string, nom2: string, ap2: string): Promise<string>;
    calculadoraNombre(nom1: string, ap1: string, op: string, nom2: string, ap2: string): Promise<string>;
    aniadirJugador(createJugadorDto: CreateJugadorDto): Promise<string | (CreateJugadorDto & Jugador)>;
}
