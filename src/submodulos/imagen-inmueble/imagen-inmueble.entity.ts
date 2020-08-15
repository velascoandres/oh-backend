import { Entity, Column, ManyToOne } from 'typeorm';
import { AbstractEntity } from '@pimba/excalibur/lib';
import { InmuebleEntity } from '../inmueble/inmueble.entity';

@Entity('img_inmueble')
export class ImagenInmuebleEntity extends AbstractEntity {
    @Column()
    url: string;

    @ManyToOne(
        type => InmuebleEntity,
        inmueble => inmueble.imagenes,
    )
    inmueble: InmuebleEntity | number;

    @Column(
        {
            type: 'tinyint',
            default: 0,
        },
    )
    habilitado: 0 | 1 = 1;
}