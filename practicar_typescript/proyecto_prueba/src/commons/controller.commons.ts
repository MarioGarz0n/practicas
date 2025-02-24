import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post, UseGuards} from "@nestjs/common";
import { BaseService } from "./service.commons";
import { Console } from "console";
import { Persona } from "src/persona/entities/persona.entity";

export abstract class BaseController<T>{
    abstract getService(): BaseService<T>;

    @Get('all')
    async findAll() : Promise<Persona[]>{
        return await this.getService().findAll();
    }

    @Get('find/:id')
    async findOne(@Param('id') id): Promise<Persona>{
        //console.log(id);
        return await this.getService().findOne(id);
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: T) : Promise<T>{
        return await this.getService().save(entity);
    }

    @Post('save/many')
    @HttpCode(HttpStatus.CREATED)
    async saveMany(@Body() entities: T[]) : Promise<T[]>{
        return await this.getService().saveMany(entities);
    }

    @Delete('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any){
        return this.getService().delete(id);
    }

    @Get('count')
    async count() : Promise<number>{
        return await this.getService().count();
    }


    @Get('calculadora/:num1/:num2/:operador')
    suma(@Param('num1') num1: number, @Param('num2') num2: number, @Param('operador') op: string): T{
        return this.getService().calculadora(num1,num2,op);
    }
}