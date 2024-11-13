import { Console } from "console";
import { CreateJugadorDto } from "src/jugador/dto/create-jugador.dto";
import { Jugador } from "src/jugador/entities/jugador.entity";
import { FindManyOptions, Repository } from "typeorm";

export abstract class BaseService<T>{
    abstract getRepository(): Repository<Jugador>;

    findAll(): Promise<Jugador[]>{
        return this.getRepository().find();
    }

    findOne(id: number) : Promise<Jugador>{
        return this.getRepository().findOneBy({dorsal:id});
    }

    findByNombreApellido(nombre: string, apellido: string): Promise<Jugador>{
        return this.getRepository().findOneBy({nombre:nombre, apellidos: apellido});
    }

    count(options?: FindManyOptions<Jugador>) : Promise<number>{
        return this.getRepository().count(options);
    }

    async suma(dors1: number, dors2: number): Promise<string>{
        let res: string;
        let aux: number;

        const jug1=await this.findOne(dors1);
        const jug2=await this.findOne(dors2);

        if(!jug1)
            res="No hay ningún jugador con el dorsal "+dors1+".";
        else if(!jug2)
            res="No hay ningún jugador con el dorsal "+dors2+".";
        else{
            aux=Number(dors1)+Number(dors2);
            const jug3=await this.findOne(aux);
            res=(await jug1).nombre+" "+(await jug1).apellidos+" + "+(await jug2).nombre+" "+(await jug2).apellidos+" = ";
            if(!jug3)
                res=res+aux+" (Nadie tiene este dorsal)";
            else
                res=res+(await jug3).nombre+" "+(await jug3).apellidos;
        }

        return res;
    }

    async resta(dors1: number, dors2: number): Promise<string>{
        let res: string;
        let aux: number;

        const jug1=await this.findOne(dors1);
        const jug2=await this.findOne(dors2);

        if(!jug1)
            res="No hay ningún jugador con el dorsal "+dors1+".";
        else if(!jug2)
            res="No hay ningún jugador con el dorsal "+dors2+".";
        else{
            if(Number(dors2)>Number(dors1))
                aux=Number(dors2)-Number(dors1);
            else
                aux=Number(dors1)-Number(dors2);
            const jug3=await this.findOne(aux);
            res=(await jug1).nombre+" "+(await jug1).apellidos+" - "+(await jug2).nombre+" "+(await jug2).apellidos+" = ";
            if(!jug3)
                if(aux==0)
                    res=res+"Don José Bordalás Jiménez";
                else{
                    res=res+aux+" (Nadie tiene este dorsal)";
                }
            else
                res=res+(await jug3).nombre+" "+(await jug3).apellidos;
        }

        return res;
    }

    calculadora(dors1: number, dors2: number, operador: string): Promise<string>{
        let res: Promise<string>;

        if(operador.toLowerCase()==='suma' || operador==='+'){
            res = this.suma(dors1,dors2);
        }
        else if(operador.toLowerCase()==='resta' || operador==='-'){
            res = this.resta(dors1,dors2);
        }
        /*else if(operador.toLowerCase()==='multiplicacion' || operador==='*'){
            //res = this.multiplicacion(dors1,dors2);
        }
        else if(operador.toLowerCase()==='division'){ //no se pone "/" porque en la URL no se coge bien
            //res = this.division(dors1,dors2);
        }
        else{
            res = "No ha introducido una operacion válida."
        }*/

        return res;
    }

    async sumaNom(nom1: string, ap1:string, nom2: string, ap2: string): Promise<string>{
        let res: string;
        let aux: number;

        const jug1=await this.findByNombreApellido(nom1,ap1);
        const jug2=await this.findByNombreApellido(nom2,ap2);

        if(!jug1)
            res=nom1+" "+ap1+" no juega en el Getafe, más quisiera.";
        else if(!jug2)
            res=nom2+" "+ap2+" no juega en el Getafe, más quisiera.";
        else{
            aux=(await jug1).dorsal+(await jug2).dorsal;
            const jug3=await this.findOne(aux);
            res=(await jug1).nombre+" "+(await jug1).apellidos+" + "+(await jug2).nombre+" "+(await jug2).apellidos+" = ";

            if(!jug3)
                res=res+aux+" (Nadie tiene este dorsal)";
            else
                res=res+(await jug3).nombre+" "+(await jug3).apellidos;
        }

        return res;
    }

    async restaNom(nom1: string, ap1:string, nom2: string, ap2: string): Promise<string>{
        let res: string;
        let aux: number;

        const jug1=await this.findByNombreApellido(nom1,ap1);
        const jug2=await this.findByNombreApellido(nom2,ap2);

        if(!jug1)
            res=nom1+" "+ap1+" no juega en el Getafe, más quisiera.";
        else if(!jug2)
            res=nom2+" "+ap2+" no juega en el Getafe, más quisiera.";
        else{
            if((await jug1).dorsal>=(await jug2).dorsal)
                aux=(await jug1).dorsal-(await jug2).dorsal;
            else
                aux=(await jug2).dorsal-(await jug1).dorsal;

            const jug3=await this.findOne(aux);
            res=(await jug1).nombre+" "+(await jug1).apellidos+" - "+(await jug2).nombre+" "+(await jug2).apellidos+" = ";

            if(!jug3)
                if(aux==0)
                    res=res+"Don José Bordalás Jiménez";
                else{
                    res=res+aux+" (Nadie tiene este dorsal)";
                }
            else
                res=res+(await jug3).nombre+" "+(await jug3).apellidos;
        }

        return res;
    }

    calculadoraNombre(nom1: string, ap1:string, op: string, nom2: string, ap2: string): Promise<string>{
        let res: Promise<string>;

        if(op.toLowerCase()==='suma' || op==='+'){
            res = this.sumaNom(nom1,ap1,nom2,ap2);
        }
        else if(op.toLowerCase()==='resta' || op==='-'){
            res = this.restaNom(nom1,ap1,nom2,ap2);
        }
        /*else{
            res = "No ha introducido una operacion válida."
        }*/

        return res;
    }

    async aniadirJugador(createJugadorDto: CreateJugadorDto){
        const jugNuevo = this.getRepository().create(createJugadorDto);
        
        const comprobacion=await this.findOne(jugNuevo.dorsal);
        if(!comprobacion)
            return this.getRepository().save(createJugadorDto);
        else
            return "Ya hay un jugador con el dorsal "+jugNuevo.dorsal+".";
    }
}