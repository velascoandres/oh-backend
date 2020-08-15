import { InmuebleEntity } from 'src/submodulos/inmueble/inmueble.entity';
import { PerfilUsuarioEntity } from 'src/submodulos/perfil-usuario/perfil-usuario.entity';
import { CategoriaEntity } from 'src/submodulos/categoria/categoria.entity';
import { ImagenInmuebleEntity } from 'src/submodulos/imagen-inmueble/imagen-inmueble.entity';
import { InmuebleFavoritoEntity } from 'src/submodulos/inmueble-favorito/inmueble-favorito.entity';

export const ENTIDADES_MYSQL = [
    InmuebleEntity,
    PerfilUsuarioEntity,
    CategoriaEntity,
    ImagenInmuebleEntity,
    InmuebleFavoritoEntity,
];
