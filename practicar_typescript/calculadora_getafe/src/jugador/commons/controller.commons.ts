import { Body, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Repository } from "typeorm";
import { BaseService } from "./service.commons";
import { Jugador } from "src/jugador/entities/jugador.entity";
import { CreateJugadorDto } from "src/jugador/dto/create-jugador.dto";


export abstract class BaseController<T>{
    abstract getService(): BaseService<T>;

    @Get('plantilla')
    async findAll(): Promise<Jugador[]>{
        return await this.getService().findAll();
    }

    @Get('buscar/:dorsal')
    async find(@Param('dorsal') dorsal:number): Promise<Jugador> {
        return await this.getService().findOne(dorsal);
    }

    @Get('buscarNombre/:nombre/:apellidos')
    async findNomAp(@Param('nombre') nombre:string, @Param('apellidos') apellido:string): Promise<Jugador> {
        return await this.getService().findByNombreApellido(nombre,apellido);
    }

    @Get('numJugadores')
    async count() : Promise<number>{
        return await this.getService().count();
    }

    @Get('calculadora/:dors1/:dors2/:operador')
    calculadora(@Param('dors1') dors1: number, @Param('dors2') dors2: number, @Param('operador') op: string): Promise<string>{
        return this.getService().calculadora(dors1,dors2,op);
    }

    @Get('calcNom/:nom1/:ap1/:op/:nom2/:ap2')
    calcNom(@Param('nom1') nom1: string, @Param('ap1') ap1: string, @Param('op') op: string, @Param('nom2') nom2: string, @Param('ap2') ap2: string): Promise<string>{
        return this.getService().calculadoraNombre(nom1,ap1,op,nom2,ap2);
    }

    @Post('fichar')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() createJugadorDto: CreateJugadorDto){
        return await this.getService().aniadirJugador(createJugadorDto);
    }
}