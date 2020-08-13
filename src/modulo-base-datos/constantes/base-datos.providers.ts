import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfiguracionModule } from 'src/modulo-configuracion/configuracion.module';
import { ConfiguracionService } from 'src/modulo-configuracion/configuracion.service';
import { ENTIDADES_MYSQL } from './entidades-mysql';
import { ENTIDADES_MONGO } from './entidades-mongo';


export const BASE_DATOS_PROVIDERS = [
    // Mysql
    TypeOrmModule.forRootAsync({
        imports: [
            ConfiguracionModule,
        ],
        inject: [ConfiguracionService],
        useFactory: async (config: ConfiguracionService) => ({
            ...config.configuracionMysql,
            // entities: [
            //     ...ENTIDADES_MYSQL,
            // ],
        }),
    },
    ),
    // Mongo
    TypeOrmModule.forRootAsync({
        imports: [ConfiguracionModule.register({carpeta: '/'})],
        inject: [ConfiguracionService],
        useFactory: async (config: ConfiguracionService) => ({
            ...config.configuracionMongo,
            entities: [
                ...ENTIDADES_MONGO,
            ],
        }),
    },
    ),
];