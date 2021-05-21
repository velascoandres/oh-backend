import { Entity, Column, ManyToOne } from 'typeorm';
import { AbstractEntity } from '@pimba/excalibur/lib';
import { PropertyEntity } from '../inmueble/property.entity';

@Entity('img_inmueble')
export class ImagenInmuebleEntity extends AbstractEntity {
    @Column()
    url: string;

    @ManyToOne(
        type => PropertyEntity,
        inmueble => inmueble.pictures,
    )
    inmueble: PropertyEntity | number;

    @Column(
        {
            type: 'tinyint',
            default: 0,
        },
    )
    habilitado: 0 | 1 = 1;
}
