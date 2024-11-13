import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateJugadorDto{
    
    @IsInt()
    @IsPositive()
    dorsal: number;
    
    @IsString()
    nombre: string;

    @IsString()
    apellidos: string;
}