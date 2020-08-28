import {Module} from '@nestjs/common';
import {PrecioService} from './precio.service';
import {PrecioController} from './precio.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PrecioEntity} from './precio.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                PrecioEntity,
            ],
            'default',
        ),
    ],
    providers: [
        PrecioService,
    ],
    controllers: [
        PrecioController,
    ],
    exports: [
        PrecioService,
    ]
})
export class PrecioModule {
}
