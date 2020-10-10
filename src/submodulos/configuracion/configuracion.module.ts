import {Module} from '@nestjs/common';
import {ConfiguracionService} from './configuracion.service';

@Module({
    providers: [
        ConfiguracionService,
    ],
    exports: [
        ConfiguracionService,
    ],
})
export class ConfiguracionModule {
}
