import { Persona } from "src/persona/entities/persona.entity";
import { FindManyOptions, Repository } from "typeorm";
export declare abstract class BaseService<T> {
    abstract getRepository(): Repository<Persona>;
    findAll(): Promise<Persona[]>;
    findOne(id: number): Promise<Persona>;
    save(entity: T): Promise<T>;
    saveMany(entities: T[]): Promise<T[]>;
    delete(id: any): Promise<void>;
    count(options?: FindManyOptions<Persona>): Promise<number>;
    suma(num1: number, num2: number): number;
    resta(num1: number, num2: number): number;
    multiplicacion(num1: number, num2: number): number;
    division(num1: number, num2: number): T;
    exponencial(num: number, exp: number): number;
    calculadora(num1: number, num2: number, operador: string): T;
}
