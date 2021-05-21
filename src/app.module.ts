import {Module, OnModuleInit} from '@nestjs/common';

import {DataBaseModule, DataBaseService} from '@nest-excalibur/data-base/lib';


import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MODULOS} from './constantes/modulos';

import {ENTIDADES_MYSQL} from './constantes/entidades-mysql';
import { CONFIGURATION_PRODUCCION } from './constantes/config/produccion';
import { CONFIGURACION_DESARROLLO } from './constantes/config/desarrollo';

@Module({
    imports: [
        DataBaseModule.forRoot(
            {
                connections: {
                    mysql: {
                        ...process.env.NODE_ENV ? CONFIGURATION_PRODUCCION.mysql : CONFIGURACION_DESARROLLO.mysql,
                        entities: [
                            ...ENTIDADES_MYSQL,
                        ],
                    },
                },
                productionFlag: !!process.env.NODE_ENV,
            }
        ),
        ...MODULOS,
    ],
    controllers: [
        AppController
    ],
    providers: [
        AppService
    ],
})
export class AppModule implements OnModuleInit {
    constructor(
        private dataBaseService: DataBaseService,
    ) {
    }

    async createData() {
        if (CONFIGURACION_DESARROLLO.crearDatosPrueba) {
            await this.dataBaseService.insertData();
            this.dataBaseService.showSummary(true);
        }
    }

    onModuleInit(): any {
        this.createData();
    }
}
