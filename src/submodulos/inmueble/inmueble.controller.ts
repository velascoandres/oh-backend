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
import {InmuebleEntity} from './inmueble.entity';
import {InmuebleService} from './inmueble.service';
import {InmuebleCreateDto} from './dtos/inmueble-create.dto';
import {InmuebleUpdateDto} from './dtos/inmueble-update.dto';
import {FilesInterceptor} from '@nestjs/platform-express';
import {PrecioCreateMovilDto} from '../precio/dtos/precio-create.dto';
import {plainToClass} from 'class-transformer';
import {validate} from 'class-validator';
import {UploadedFileMetadata} from '@pimba/excalibur/lib/modules/libs/google-cloud-storage/src/interfaces';
import {DeepPartial} from 'typeorm';
import {PrecioEntity} from '../precio/precio.entity';
import {InmuebleCreateMovilDto} from './dtos/inmueble-create-movil.dto';
import {InmuebleUpdateMovilDto} from './dtos/inmueble-update-movil.dto';
import {CrudController, CrudOptions} from '@pimba/excalibur/lib';


const options:CrudOptions = {
    dtoConfig: {
        createDtoType: InmuebleCreateDto,
        updateDtoType: InmuebleUpdateDto,
    },
    enableErrorMessages: true,
};


@Controller('inmueble')
export class InmuebleController extends CrudController(options) {
    constructor(
        private readonly _inmuebleService: InmuebleService,
    ) {
        super(
            _inmuebleService,
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
        @Param('idInmueble') idInmueble: number,
        @Body() inmuebleConPrecio: InmuebleUpdateMovilDto,
        @UploadedFiles() imagenes: UploadedFileMetadata[],
    ): Promise<InmuebleEntity> {
        idInmueble = Number(idInmueble);
        const esIdValido = !isNaN(idInmueble);
        if (esIdValido) {
            const inmuebleParseado = await plainToClass(InmuebleUpdateMovilDto, inmuebleConPrecio);
            const erroresInmueble = await validate(inmuebleParseado);
            const inmuebleValido = erroresInmueble.length === 0;

            if (inmuebleValido) {
                // llamar al servicio;
                try {
                    // Borramos propiedades de precio e imagen
                    delete inmuebleParseado.valor;
                    delete inmuebleParseado.tipoMoneda;
                    delete inmuebleParseado.imagenes;
                    const precio: DeepPartial<PrecioEntity> = {
                        valor: inmuebleConPrecio.valor,
                        tipoMoneda: +inmuebleConPrecio.tipoMoneda,
                    };
                    if (inmuebleParseado.imagenesEliminar) {
                        inmuebleParseado.imagenesEliminar = (inmuebleParseado.imagenesEliminar as string).split(',');
                    }
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
                    }
                });
                throw new BadRequestException({mensaje: 'datos invalidos'});
            }
        } else {
            throw new BadRequestException({mensaje: 'datos invalidos'});
        }

    }
}
