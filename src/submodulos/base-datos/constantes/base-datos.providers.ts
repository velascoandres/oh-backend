import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ENTIDADES_MYSQL } from './entidades-mysql';
import { ENTIDADES_MONGO } from './entidades-mongo';
import { ConfiguracionModule } from 'src/submodulos/configuracion/configuracion.module';
import { ConfiguracionService } from 'src/submodulos/configuracion/configuracion.service';


export const CONFIGURACION_MYSQL = [
    // Mysql
    TypeOrmModule.forRootAsync({
        imports: [
            ConfiguracionModule,
        ],
        inject: [ConfiguracionService],
        useFactory: async (config: ConfiguracionService) => ({
            ...config.configuracionMysql,
            entities: [
                ...ENTIDADES_MYSQL,
            ],
        }),
    },
    ),
];

export const CONFIGURACION_MONGODB = [
    // Mongo
    TypeOrmModule.forRootAsync({
        name: 'conexion_mongo',
        imports: [
            ConfiguracionModule,
        ],
        inject: [
            ConfiguracionService
        ],
        useFactory: async (config: ConfiguracionService) => ({
            ...config.configuracionMongo as TypeOrmModuleOptions,
            entities: [
                ...ENTIDADES_MONGO,
            ],
        }),
    },
    ),
];