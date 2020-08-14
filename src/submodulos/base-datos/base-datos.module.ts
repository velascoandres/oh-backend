import { Module } from '@nestjs/common';
import { BASE_DATOS_PROVIDERS } from './constantes/base-datos.providers';
import { InmuebleService } from '../inmueble/inmueble.service';
import { ConfiguracionService } from '../configuracion/configuracion.service';
import { ConfiguracionModule } from '../configuracion/configuracion.module';
import { crearDatos } from '@pimba/excalibur/lib';
import { PerfilUsuarioService } from '../perfil-usuario/perfil-usuario.service';

@Module({
    imports: [
        ...BASE_DATOS_PROVIDERS,
        ConfiguracionModule,
    ],
    exports: [
        ...BASE_DATOS_PROVIDERS,
    ],
})
export class BaseDatosModule {
    constructor(
        private readonly _configService: ConfiguracionService,
        private readonly _inmuebleService: InmuebleService,
        private readonly _perfilUsuarioService: PerfilUsuarioService,
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
            './datos-prueba/datos-usuario.json',
            this._perfilUsuarioService,
        );
        console.log('Creado datos para perfil-usuario');
        await crearDatos(
            './datos-prueba/datos-inmueble.json',
            this._inmuebleService,
        );
        console.log('Creado datos para inmueble');
    }
}