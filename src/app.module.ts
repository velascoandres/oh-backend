import {Module, OnModuleInit} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MODULOS} from './constantes/modulos';
import {DataBaseModule, DataBaseService} from '@pimba/excalibur/lib';
import {CONFIGURATION_PRODUCCION} from './submodulos/configuracion/config/produccion';
import {CONFIGURACION_DESARROLLO} from './submodulos/configuracion/config/desarrollo';
import {ENTIDADES_MYSQL} from './constantes/entidades-mysql';
import {ENTIDADES_MONGO} from './constantes/entidades-mongo';

@Module({
    imports: [
        DataBaseModule.forRoot(
            {
                conections: {
                    mysql: {
                        ...process.env.NODE_ENV ? CONFIGURATION_PRODUCCION.mysql : CONFIGURACION_DESARROLLO.mysql,
                        entities: [
                            ...ENTIDADES_MYSQL,
                        ],
                    },
                    mongodb: {
                        ...process.env.NODE_ENV ? CONFIGURATION_PRODUCCION.mongodb : CONFIGURACION_DESARROLLO.mongodb,
                        entities: [
                            ...ENTIDADES_MONGO,
                        ],
                    }
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
