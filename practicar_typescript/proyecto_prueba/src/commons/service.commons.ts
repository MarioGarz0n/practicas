import { Persona } from "src/persona/entities/persona.entity";
import { Equal, FindManyOptions, Repository } from "typeorm";

export abstract class BaseService<T>{
    abstract getRepository() : Repository<Persona>;

    //Los 6 siguientes son los tipicos servicios que se tienen
    findAll() : Promise<Persona[]>{
        return this.getRepository().find();
    }

    findOne(id: number) : Promise<Persona>{
        return this.getRepository().findOneBy({id:id});
    }

    save(entity: T) : Promise<T>{
        return this.getRepository().save(entity);
    }

    saveMany(entities: T[]) : Promise<T[]>{
        return this.getRepository().save(entities);
    }

    async delete(id: any){
        await this.getRepository().delete(id);
    }

    count(options?: FindManyOptions<Persona>) : Promise<number>{
        return this.getRepository().count(options);
    }



    suma(num1: number, num2: number) : number{
        const sum=Number(num1)+Number(num2);
        return sum;
    }

    resta(num1: number, num2: number) : number{
        const res=Number(num1)-Number(num2);
        return res;
    }

    multiplicacion(num1: number, num2: number) : number{
        const mul=Number(num1)*Number(num2);
        return mul;
    }

    division(num1: number, num2: number) : T{
        let div: any;
        if(num2 != 0){
            div=Number(num1)/Number(num2);
        } else{
            div="No se puede dividir entre 0.";
        }
        return div;
    }

    exponencial(num: number, exp: number): number{
        let res: number;

        if(exp==0)
            res=1; //cualquier numero elevado a 0 es 1
        else if(exp==1)
            res=num;
        else{
            res=num;
            for(let i=1; i<exp; i++){
                res=res*num;
            }
        }

        return res;
    }

    calculadora(num1: number, num2: number, operador: string) : T{
        let res: any;

        if(operador.toLowerCase()==='suma' || operador==='+'){
            res = this.suma(num1,num2);
        }
        else if(operador.toLowerCase()==='resta' || operador==='-'){
            res = this.resta(num1,num2);
        }
        else if(operador.toLowerCase()==='multiplicacion' || operador==='*'){
            res = this.multiplicacion(num1,num2);
        }
        else if(operador.toLowerCase()==='division'){ //no se pone "/" porque en la URL no se coge bien
            res = this.division(num1,num2);
        }
        else if(operador.toLowerCase()==='exponencial' || operador==='^'){
            res = this.exponencial(num1,num2);
        }
        else{
            res = "No ha introducido una operacion válida."
        }

        return res;
    }
}