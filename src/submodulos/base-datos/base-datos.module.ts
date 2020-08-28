import { Module } from '@nestjs/common';
import { CONFIGURACION_MYSQL, CONFIGURACION_MONGODB } from './constantes/base-datos.providers';
import { InmuebleService } from '../inmueble/inmueble.service';
import { ConfiguracionService } from '../configuracion/configuracion.service';
import { ConfiguracionModule } from '../configuracion/configuracion.module';
import { crearDatos } from '@pimba/excalibur/lib';
import { PerfilUsuarioService } from '../perfil-usuario/perfil-usuario.service';
import { EntidadCoordenadaService } from '../entidad-coordenada/entidad-coordenada.service';
import { ImagenInmuebleService } from '../imagen-inmueble/imagen-inmueble.service';
import { CategoriaService } from '../categoria/categoria.service';
import { InmuebleFavoritoService } from '../inmueble-favorito/inmueble-favorito.service';
import {PrecioService} from '../precio/precio.service';
import {TipoMonedaService} from '../tipo-moneda/tipo-moneda.service';

@Module({
    imports: [
        ...CONFIGURACION_MYSQL,
        ...CONFIGURACION_MONGODB,
        ConfiguracionModule,
    ],
    exports: [
        ...CONFIGURACION_MYSQL,
        ...CONFIGURACION_MONGODB,
    ],
})
export class BaseDatosModule {
    constructor(
        private readonly _configService: ConfiguracionService,
        private readonly _inmuebleService: InmuebleService,
        private readonly _perfilUsuarioService: PerfilUsuarioService,
        private readonly _entidadCoordenadasService: EntidadCoordenadaService,
        private readonly _inmuebleImagenService: ImagenInmuebleService,
        private readonly _categoriaService: CategoriaService,
        private readonly _inmuebleFavoritoService: InmuebleFavoritoService,
        private readonly _precioService: PrecioService,
        private readonly _tipoMonedaService: TipoMonedaService,
    ) {

        const crearDatosPrueba = this._configService.get('crearDatosPrueba');
        if (crearDatosPrueba) {
            // Creamos datos de prueba;
            this.cargarDatosPrueba().catch(
                (error) => {
                    console.error(
                        {
                            error,
                        }
                    );
                },
            );
        }
    }

    async cargarDatosPrueba() {
        await crearDatos(
            './datos-prueba/datos-tipo-moneda.json',
            this._tipoMonedaService,
        );
        console.log('Creado datos para tipo moneda');
        await crearDatos(
            './datos-prueba/datos-categoria.json',
            this._categoriaService,
        );
        console.log('Creado datos para categoria');

        await crearDatos(
            './datos-prueba/datos-usuario.json',
            this._perfilUsuarioService,
        );
        console.log('Creado datos para perfil-usuario');
        await crearDatos(
            './datos-prueba/datos-inmueble.json',
            this._inmuebleService,
        );
        console.log('Creado datos para inmueble');

        await crearDatos(
            './datos-prueba/datos-precio.json',
            this._precioService,
        );
        console.log('Creado datos para precio');

        await crearDatos(
            './datos-prueba/datos-imagen-inmueble.json',
            this._inmuebleImagenService,
        );
        console.log('Creado datos para imagen-inmueble');

        await crearDatos(
            './datos-prueba/datos-entidad-coordenada.json',
            this._entidadCoordenadasService,
        );
        console.log('Creado datos para entidad coordenada');

        await crearDatos(
            './datos-prueba/datos-inmueble-favorito.json',
            this._inmuebleFavoritoService,
        );
        console.log('Creado datos para inmueble favorito');
    }
}
