import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractEntity } from '@pimba/excalibur/lib';
import { InmuebleEntity } from '../inmueble/inmueble.entity';
import { InmuebleFavoritoController } from '../inmueble-favorito/inmueble-favorito.controller';
import { InmuebleFavoritoEntity } from '../inmueble-favorito/inmueble-favorito.entity';

@Entity('perfil_usuario')
export class PerfilUsuarioEntity extends AbstractEntity {
    @Column(
        {
            type: 'varchar',
        },
    )
    nombres: string;

    @Column(
        {
            type: 'varchar',
        },
    )
    apellidos: string;

    @Column(
        {
            type: 'varchar',
            unique: true,
            name: 'ide_pais',
        },
    )
    identificacionPais: string;

    @Column(
        {
            type: 'varchar',
            unique: true,
        },
    )
    telefono: string;

    @Column(
        {
            type: 'varchar',
        },
    )
    direccion: string;

    @Column(
        {
            type: 'tinyint',
            default: 0,
        },
    )
    habilitado: 0 | 1 = 0;

    @OneToMany(
        type => InmuebleEntity,
        inmueble => inmueble.perfilUsuario,
    )
    inmuebles: InmuebleEntity[];

    @OneToMany(
        type => InmuebleFavoritoEntity,
        inmueble => inmueble.perfilUsuario,
    )
    inmueblesFavoritos: InmuebleFavoritoEntity[];

}