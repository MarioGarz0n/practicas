import { BaseService } from "./service.commons";
import { Persona } from "src/persona/entities/persona.entity";
export declare abstract class BaseController<T> {
    abstract getService(): BaseService<T>;
    findAll(): Promise<Persona[]>;
    findOne(id: any): Promise<Persona>;
    save(entity: T): Promise<T>;
    saveMany(entities: T[]): Promise<T[]>;
    delete(id: any): Promise<void>;
    count(): Promise<number>;
    suma(num1: number, num2: number, op: string): T;
}
