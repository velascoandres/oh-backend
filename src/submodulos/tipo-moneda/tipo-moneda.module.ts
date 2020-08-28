import {Module} from '@nestjs/common';
import {TipoMonedaService} from './tipo-moneda.service';
import {TipoMonedaController} from './tipo-moneda.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TipoMonedaEntity} from './tipo-moneda.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                TipoMonedaEntity,
            ],
            'default',
        ),
    ],
    providers: [TipoMonedaService],
    controllers: [TipoMonedaController],
    exports: [
        TipoMonedaService,
    ],
})
export class TipoMonedaModule {
}
