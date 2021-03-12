import {Entity, Column, ManyToOne, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import {AbstractEntity} from '@pimba/excalibur/lib';
import {PerfilUsuarioEntity} from '../perfil-usuario/perfil-usuario.entity';
import {ImagenInmuebleEntity} from '../imagen-inmueble/imagen-inmueble.entity';
import {CategoriaEntity} from '../categoria/categoria.entity';
import {InmuebleFavoritoEntity} from '../inmueble-favorito/inmueble-favorito.entity';
import {PrecioEntity} from '../precio/precio.entity';

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
            name: 'descripcion',
            type: 'varchar',
        }
    )

    descripcion: string;
    @Column(
        {
            name: 'predio',
            type: 'int',
            unique: true,
        },
    )
    predio: number;

    @Column(
        {
            type: 'varchar',
        },
    )
    direccion: string;

    @Column(
        {
            type: 'decimal',
            precision: 6,
            scale: 2
        },
    )
    areaTerreno: number;


    // @Column(
    //     {
    //         type: 'decimal',
    //         precision: 8,
    //         scale: 2
    //     },
    // )
    // precio: number;

    @Column(
        {
            type: 'decimal',
            precision: 6,
            scale: 2
        },
    )
    areaConstruccion: number;

    @Column(
        {
            type: 'int',
        }
    )
    habitaciones: number;

    @Column(
        {
            type: 'int',
        }
    )
    parqueaderos: number;

    @Column(
        {
            type: 'int',
        }
    )
    plantas: number;

    @Column(
        {
            type: 'tinyint',
            default: 0,
        }
    )
    enAlquiler: 0 | 1 = 0;

    @Column(
        {
            type: 'tinyint',
            default: 0,
        },
    )
    habilitado: 0 | 1 = 0;

    @Column(
        {
            type: 'decimal',
            precision: 8,
            scale: 2
        }
    )
    precio: number;


    @OneToMany(
        type => ImagenInmuebleEntity,
        imagenInmueble => imagenInmueble.inmueble,
    )
    imagenes: ImagenInmuebleEntity[];


    @OneToMany(
        type => InmuebleFavoritoEntity,
        inmueble => inmueble.perfilUsuario,
    )
    inmueblesFavoritos: InmuebleFavoritoEntity[];

    @ManyToOne(
        type => PerfilUsuarioEntity,
        perfilUsuario => perfilUsuario.inmuebles,
        {
            nullable: false,
        }
    )
    perfilUsuario: PerfilUsuarioEntity | number;

    @ManyToOne(
        type => CategoriaEntity,
        categoria => categoria.inmuebles,
    )
    categoria: CategoriaEntity | number;
}
