import { TypeOrmModule } from '@nestjs/typeorm';
import { ENTIDADES_MYSQL } from './entidades-mysql';
import { ENTIDADES_MONGO } from './entidades-mongo';
import { ConfiguracionModule } from 'src/submodulos/configuracion/configuracion.module';
import { ConfiguracionService } from 'src/submodulos/configuracion/configuracion.service';


export const BASE_DATOS_PROVIDERS = [
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