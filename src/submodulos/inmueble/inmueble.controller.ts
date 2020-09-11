import {
    BadRequestException,
    Body,
    Controller,
    HttpStatus,
    InternalServerErrorException,
    Param,
    Post, Put,
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
import {PrecioCreateMovilDto, PrecioUpdateMovilDto} from '../precio/dtos/precio-create.dto';
import {plainToClass} from 'class-transformer';
import {validate} from 'class-validator';
import {UploadedFileMetadata} from '@pimba/excalibur/lib/modules/libs/google-cloud-storage/src/interfaces';
import {DeepPartial} from 'typeorm';
import {PrecioEntity} from '../precio/precio.entity';
import {InmuebleCreateMovilDto} from './dtos/inmueble-create-movil.dto';
import {InmuebleUpdateMovilDto} from './dtos/inmueble-update-movil.dto';

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

    @Post('publicar-inmueble')
    @UseInterceptors(
        FilesInterceptor(
            'imagenes[]',
            20,
            {},
        )
    )
    async publicarInmueble(
        @Body() inmueble: InmuebleCreateMovilDto,
        @Body('tipoMoneda') tipoMoneda: number,
        @Body('valor') valor: number,
        @Req() req: any,
        @Res() response: any,
        @UploadedFiles() imagenes: UploadedFileMetadata[],
    ): Promise<void> {
        const precio: DeepPartial<PrecioEntity> = {
            valor,
            tipoMoneda,
        };
        const precioParseado = await plainToClass(PrecioCreateMovilDto, precio);
        const inmuebleParseado = await plainToClass(InmuebleCreateMovilDto, inmueble);

        const erroresPrecio = await validate(precioParseado);
        const erroresInmueble = await validate(inmuebleParseado);
        const precioValido = erroresPrecio.length === 0;
        const inmuebleValido = erroresInmueble.length === 0;

        if (precioValido && inmuebleValido) {
            // llamar al servicio;
            try {
                const respuesta = await this._inmuebleService.registrarInmueblePrecio(
                    inmuebleParseado,
                    precio,
                    imagenes,
                );
                response.status(HttpStatus.OK).send(respuesta);
            } catch (error) {
                console.error(error);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Error del servidor');
            }
        } else {
            console.log({
                errores: {
                    erroresInmueble: erroresInmueble.toString(),
                    erroresPrecio: erroresPrecio.toString(),
                }
            });
            response.status(HttpStatus.BAD_REQUEST).send({mensaje: 'datos invalidos'});
        }
    }

    @Put('editar-publicacion-inmueble/:idInmueble')
    @UseInterceptors(
        FilesInterceptor(
            'imagenes[]',
            20,
            {},
        )
    )
    async EditarpublicacionInmueble(
        @Body() inmueble: InmuebleUpdateMovilDto,
        @Body('tipoMoneda') tipoMoneda: number,
        @Body('valor') valor: number,
        @Param('idInmueble') idInmueble: number,
        @UploadedFiles() imagenes: UploadedFileMetadata[],
    ): Promise<InmuebleEntity> {
        idInmueble = Number(idInmueble);
        const esIdValido = !isNaN(idInmueble);
        if (esIdValido) {
            const precio: DeepPartial<PrecioEntity> = {
                valor,
                tipoMoneda,
            };
            if (inmueble.imagenesEliminar){
                inmueble.imagenesEliminar = inmueble.imagenesEliminar.toString().split(',');
            }
            const precioParseado = await plainToClass(PrecioUpdateMovilDto, precio);
            const inmuebleParseado = await plainToClass(InmuebleUpdateMovilDto, inmueble);

            const erroresPrecio = await validate(precioParseado);
            const erroresInmueble = await validate(inmuebleParseado);
            const precioValido = erroresPrecio.length === 0;
            const inmuebleValido = erroresInmueble.length === 0;

            if (precioValido && inmuebleValido) {
                // llamar al servicio;
                try {
                    return await this._inmuebleService.actualizarInmueblePrecio(
                        idInmueble,
                        inmuebleParseado,
                        precio,
                        imagenes,
                    );
                } catch (error) {
                    console.error(error);
                    throw new InternalServerErrorException({mensaje: 'Error del servidor'});
                }
            } else {
                console.log({
                    errores: {
                        erroresInmueble: erroresInmueble.toString(),
                        erroresPrecio: erroresPrecio.toString(),
                    }
                });
                throw new BadRequestException({mensaje: 'datos invalidos'});
            }
        } else {
            throw new BadRequestException({mensaje: 'datos invalidos'});
        }

    }
}
