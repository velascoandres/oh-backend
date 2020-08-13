import { Module } from '@nestjs/common';
import { BASE_DATOS_PROVIDERS } from './constantes/base-datos.providers';

@Module({
    imports: [
        ...BASE_DATOS_PROVIDERS,
    ],
    exports: [
        ...BASE_DATOS_PROVIDERS,
    ],
})
export class BaseDatosModule {
}