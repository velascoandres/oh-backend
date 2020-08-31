import {Column, Entity, ManyToOne, OneToOne} from 'typeorm';
import {AbstractEntity} from '@pimba/excalibur/lib';
import {InmuebleEntity} from '../inmueble/inmueble.entity';
import {TipoMonedaEntity} from '../tipo-moneda/tipo-moneda.entity';

@Entity('precio')
export class PrecioEntity extends AbstractEntity {
    @Column(
        {
            type: 'decimal',
            precision: 10,
            scale: 2
        },
    )
    valor: number;

    @OneToOne(
        type => InmuebleEntity,
        inmueble => inmueble.precio,
    )
    inmueble: InmuebleEntity | number;

    @ManyToOne(
        type => TipoMonedaEntity,
        tipoMoneda => tipoMoneda.precios,
    )
    tipoMoneda: TipoMonedaEntity | number;

}
