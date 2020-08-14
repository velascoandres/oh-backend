import { InmuebleModule } from 'src/submodulos/inmueble/inmueble.module';
import { PerfilUsuarioModule } from 'src/submodulos/perfil-usuario/perfil-usuario.module';
import { CategoriaModule } from 'src/submodulos/categoria/categoria.module';
import { ImagenInmuebleModule } from 'src/submodulos/imagen-inmueble/imagen-inmueble.module';
import { EntidadCoordenadaModule } from 'src/submodulos/entidad-coordenada/entidad-coordenada.module';

export const MODULOS = [
    InmuebleModule,
    PerfilUsuarioModule,
    CategoriaModule,
    ImagenInmuebleModule,
    EntidadCoordenadaModule,
];