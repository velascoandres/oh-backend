
import { Injectable } from '@nestjs/common';
import { EnvConfig } from './interfaces';
import { CONFIGURATION_PRODUCCION } from './config/produccion';
import { CONFIGURACION_DESARROLLO } from './config/desarrollo';

@Injectable()
export class ConfiguracionService {
    private readonly envConfig: EnvConfig;

    constructor(
        // @Inject(OPCIONES_CONFIGURACION)
        // opciones: OpcionesConfiguracion
    ) {
        // const rutaArchivo = `${process.env.NODE_ENV || 'development'}.env`;
        // const envArchivo = path.resolve(__dirname, '../../', opciones.carpeta, rutaArchivo);
        // this.envConfig = dotenv.parse(fs.readFileSync(envArchivo));
        this.envConfig = process.env.NODE_ENV ? CONFIGURATION_PRODUCCION : CONFIGURACION_DESARROLLO;
    }

    get(key: string): string {
        return this.envConfig[key];
    }

    get configuracionMysql(): any {
        return this.envConfig.mysql;
    }

    get configuracionMongo(): any {
        return this.envConfig.mongodb;
    }
}