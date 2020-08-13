import { OpcionesConfiguracion } from "./interfaces/opciones-configuracion.interface";
import { DynamicModule, Module } from "@nestjs/common";
import { OPCIONES_CONFIGURACION } from "./constantes";
import { ConfiguracionService } from "./configuracion.service";

@Module({
    providers: [
        ConfiguracionService,
    ],
    exports: [
        ConfiguracionService,
    ],
})
export class ConfiguracionModule {
    static register(opciones: OpcionesConfiguracion): DynamicModule {
        return {
            module: ConfiguracionModule,
            providers: [
                {
                    provide: OPCIONES_CONFIGURACION,
                    useValue: opciones,
                },
                ConfiguracionService,
            ],
            exports: [
                ConfiguracionService
            ],
        };
    }
}