import { AbstractEntity } from '@pimba/excalibur/lib';
import { Entity, Column, OneToMany } from 'typeorm';
import { type } from 'os';
import { InmuebleEntity } from '../inmueble/inmueble.entity';

@Entity('categoria')
export class CategoriaEntity extends AbstractEntity {
    @Column(
        {
            type: 'varchar',
        }
    )
    nombre: string;

    @OneToMany(
        type => InmuebleEntity,
        inmueble => inmueble.categoria,
    )
    inmuebles: InmuebleEntity[];

    @Column(
        {
            type: 'tinyint',
            default: 1,
        },
    )
    habilitado: 0 | 1 = 1;
}
