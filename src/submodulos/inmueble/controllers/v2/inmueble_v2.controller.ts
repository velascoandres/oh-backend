import { Body, Controller, Post, UploadedFiles } from "@nestjs/common";
import { UploadedFileMetadata } from "@pimba/excalibur/lib/modules/libs/google-cloud-storage/src/interfaces";
import { PrecioEntity } from "src/submodulos/precio/precio.entity";
import { DeepPartial } from "typeorm";
import { InmuebleCreateMovilDto } from "../../dtos/inmueble-create-movil.dto";
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
}