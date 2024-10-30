import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Jugador{
    @PrimaryColumn()
    dorsal: number;

    @Column()
    nombre: string;

    @Column()
    apellidos: string;
}