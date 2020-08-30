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
import {PrecioCreateDto} from '../precio/dtos/precio-create.dto';
import {plainToClass} from 'class-transformer';
import {validate} from 'class-validator';
import {UploadedFileMetadata} from '@pimba/excalibur/lib/modules/libs/google-cloud-storage/src/interfaces';

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
        @Body('inmueble') inmueble: InmuebleCreateDto,
        @Body('precio') precio: PrecioCreateDto,
        @Req() req: any,
        @Res() response: any,
        @UploadedFiles() imagenes: UploadedFileMetadata[],
    ): Promise<void> {

        const precioParseado = await plainToClass(PrecioCreateDto, precio);
        const inmuebleParseado = await plainToClass(InmuebleCreateDto, inmueble);

        const erroresPrecio = await validate(precioParseado);
        const erroresInmueble = await validate(inmuebleParseado);
        const precioValido = erroresPrecio.length > 0;
        const inmuebleValido = erroresInmueble.length > 0;

        if (precioValido && inmuebleValido) {
            // llamar al servicio;
            try {
                const respuesta = await this._inmuebleService.registrarInmueblePrecio(
                    inmuebleParseado,
                    precioParseado,
                    imagenes,
                );
                response.status(HttpStatus.OK).send(respuesta);
            } catch (error) {
                response.status(HttpStatus.OK).send(inmueble);
            }
        } else {
            console.log({
                errores: {
                    erroresInmueble,
                    erroresPrecio,
                }
            });
            response.status(HttpStatus.BAD_REQUEST).send({mensaje: 'datos invalidos'});
        }

    }
}
