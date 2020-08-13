import { Entity, Column, Index } from "typeorm";
import { AbstractEntity } from "@pimba/excalibur/lib";

@Entity('inmueble')
export class InmuebleEntity extends AbstractEntity {
    @Column(
        {
            name: 'nombre',
            type: 'varchar',
        }
    )
    nombre: string;
    @Column(
        {
            name: 'predio',
            type: 'int',
            unique: true,
        },
    )
    predio: number;
}