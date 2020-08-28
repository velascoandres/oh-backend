import {Column, Entity, OneToMany} from 'typeorm';
import {AbstractEntity} from '@pimba/excalibur/lib';
import {InmuebleEntity} from '../inmueble/inmueble.entity';
import {PrecioEntity} from '../precio/precio.entity';

@Entity('tipo_moneda')
export class TipoMonedaEntity extends AbstractEntity {
    @Column(
        {
            name: 'nombre',
            type: 'varchar',
        }
    )
    nombre: string;

    @Column(
        {
            name: 'simbolo',
            type: 'varchar',
        },
    )
    simbolo: string;

    @Column(
        {
            type: 'tinyint',
            default: 0,
        },
    )
    esSufijo: 0 | 1 = 0;

    @OneToMany(
        type => PrecioEntity,
        precio => precio.tipoMoneda,
    )
    precio: PrecioEntity[];
}
