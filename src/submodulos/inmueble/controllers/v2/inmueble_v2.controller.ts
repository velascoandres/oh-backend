import { HttpStatus, Param, ParseIntPipe, Patch, Put, UseInterceptors } from "@nestjs/common";
import { Body, Controller, Post, UploadedFiles } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { UploadedFileMetadata } from "@pimba/excalibur/lib/modules/libs/google-cloud-storage/src/interfaces";
import { PrecioEntity } from "src/submodulos/precio/precio.entity";
import { DeepPartial } from "typeorm";
import { InmuebleCreateMovilDto } from "../../dtos/inmueble-create-movil.dto";
import { InmuebleUpdateMovilDto } from "../../dtos/inmueble-update-movil.dto";
import { InmuebleEntity } from "../../inmueble.entity";
import { InmuebleService } from "../../inmueble.service";

@Controller('inmueble/v2')
export class InmuebleV2Controller {
    constructor(
        private readonly inmuebleService: InmuebleService,
    ) { }

    @Post('publish')
    async publish(
        @Body('inmueble') inmueble: InmuebleCreateMovilDto,
        @Body('tipoMoneda') tipoMoneda: number,
        @Body('valor') valor: number,
        @UploadedFiles() imagenes: UploadedFileMetadata[] = [],
    ): Promise<InmuebleEntity> {
        const precio: DeepPartial<PrecioEntity> = {
            valor,
            tipoMoneda,
        };
        return await this.inmuebleService.registrarInmueblePrecio(
            inmueble,
            precio,
            imagenes,
        );

    }

    @Patch('update-publish/:idInmueble')
    @UseInterceptors(
        FilesInterceptor(
            'imagenes[]',
            20,
            {},
        )
    )
    async updatePublished(
        @Param(
            'idInmueble',
            new ParseIntPipe(
                {
                    errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
                },
            )
        ) idInmueble: number,
        @Body('inmueble') inmuebleConPrecio: InmuebleUpdateMovilDto,
        @Body('tipoMoneda') tipoMoneda: number,
        @Body('valor') valor: number,
        @UploadedFiles() imagenes: UploadedFileMetadata[],
    ): Promise<InmuebleEntity> {
        const precio: DeepPartial<PrecioEntity> = {
            valor: valor,
            tipoMoneda: tipoMoneda,
        };
        if (inmuebleConPrecio?.imagenesEliminar) {
            inmuebleConPrecio.imagenesEliminar = (inmuebleConPrecio.imagenesEliminar as string).split(',');
        }
        return await this.inmuebleService.actualizarInmueblePrecio(
            idInmueble,
            inmuebleConPrecio,
            precio,
            imagenes,
        );

    }
}