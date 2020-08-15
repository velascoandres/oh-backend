import { AbstractEntity } from '@pimba/excalibur/lib';
import { Entity, ManyToOne, Index } from 'typeorm';
import { InmuebleEntity } from '../inmueble/inmueble.entity';
import { PerfilUsuarioEntity } from '../perfil-usuario/perfil-usuario.entity';


@Entity('inmu_fav')
@Index(['inmueble', 'perfilUsuario'], {unique: true})
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