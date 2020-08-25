import {
    Body,
    Controller,
    HttpStatus,
    Post,
    Req,
    Res,
    UploadedFiles,
    UseInterceptors
} from '@nestjs/common';
import {ApiController} from '@pimba/excalibur/lib';
import {InmuebleEntity} from './inmueble.entity';
import {InmuebleService} from './inmueble.service';
import {InmuebleCreateDto} from './dtos/inmueble-create.dto';
import {InmuebleUpdateDto} from './dtos/inmueble-update.dto';
import {FilesInterceptor} from '@nestjs/platform-express';
import {ImagenInmuebleCreateDto} from '../imagen-inmueble/dtos/imagen-inmueble-create.dto';

@Controller('inmueble')
export class InmuebleController extends ApiController<InmuebleEntity> {
    constructor(
        private readonly _inmuebleService: InmuebleService,
    ) {
        super(
            _inmuebleService,
            {
                createDtoType: InmuebleCreateDto,
                updateDtoType: InmuebleUpdateDto,
            }
        );
    }

    @Post()
    @UseInterceptors(
        FilesInterceptor(
            'imagenes[]',
            20,
            {},
        )
    )
    async createOne(
        @Body() newRecord: InmuebleCreateDto,
        @Req() req: any,
        @Res() response: any,
        @UploadedFiles() imagenes: ImagenInmuebleCreateDto,
    ): Promise<void> {
        console.log(imagenes, newRecord);
        response.status(HttpStatus.OK).send(newRecord);
    }
}
