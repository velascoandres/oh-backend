import {Injectable} from '@nestjs/common';
import {AbstractService} from '@pimba/excalibur/lib';
import {InmuebleEntity} from './inmueble.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {EntityManager, getManager, Repository} from 'typeorm';
import {InmuebleCreateDto} from './dtos/inmueble-create.dto';
import {PrecioCreateDto} from '../precio/dtos/precio-create.dto';
import {PrecioEntity} from '../precio/precio.entity';
import {ImagenInmuebleService} from '../imagen-inmueble/imagen-inmueble.service';
import {UploadedFileMetadata} from '@pimba/excalibur/lib/modules/libs/google-cloud-storage/src/interfaces';

@Injectable()
export class InmuebleService extends AbstractService<InmuebleEntity> {
    constructor(
        @InjectRepository(InmuebleEntity)
        private readonly _inmuebleRepository: Repository<InmuebleEntity>,
        private readonly _imagenInmuebleService: ImagenInmuebleService,
    ) {
        super(
            _inmuebleRepository,
        );
    }


    async registrarInmueblePrecio(
        inmueble: InmuebleCreateDto,
        precio: PrecioCreateDto,
        imagenes: UploadedFileMetadata[],
    ): Promise<InmuebleEntity> {
        return await getManager().transaction(
            async (entityManager: EntityManager) => {
                // guardar precio
                const precioRepositorio = entityManager.getRepository(PrecioEntity);
                const precioCreado: PrecioEntity = await precioRepositorio.save(precio);
                // guardar inmueble
                const inmuebleRepositorio = entityManager.getRepository(InmuebleEntity);
                const inmuebleCreado: InmuebleEntity = await inmuebleRepositorio.save(inmueble);
                // guardar imagenes
                const imagenesGuardadas = await this._imagenInmuebleService
                    .guardarImagenesTransaccion(entityManager, imagenes, inmuebleCreado.id);
                const inmuebleCreadoCompleto: InmuebleEntity = {
                    ...inmuebleCreado,
                    precio: precioCreado,
                    imagenes: imagenesGuardadas,
                };
                return inmuebleCreadoCompleto;
            }
        );
    }
}
