import { AbstractEntity } from '@pimba/excalibur/lib';
import { Entity, ManyToOne } from 'typeorm';
import { InmuebleEntity } from '../inmueble/inmueble.entity';
import { PerfilUsuarioEntity } from '../perfil-usuario/perfil-usuario.entity';


@Entity('inmu_fav')
export class InmuebleFavoritoEntity extends AbstractEntity {
    @ManyToOne(
        type => InmuebleEntity,
        inmueble => inmueble.inmueblesFavoritos,
    )
    inmueble: InmuebleEntity | number;

    @ManyToOne(
        type => PerfilUsuarioEntity,
        perfilUsuario => perfilUsuario.inmueblesFavoritos,
    )
    perfilUsuario: PerfilUsuarioEntity | number;
}