import {Injectable} from '@nestjs/common';
import {AbstractService} from '@pimba/excalibur/lib';
import {InmuebleEntity} from './inmueble.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {DeepPartial, EntityManager, getManager, Repository} from 'typeorm';
import {InmuebleCreateDto} from './dtos/inmueble-create.dto';
import {PrecioCreateDto, PrecioCreateMovilDto} from '../precio/dtos/precio-create.dto';
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
        inmueble: DeepPartial<InmuebleEntity>,
        precio: PrecioCreateDto | PrecioCreateMovilDto | DeepPartial<PrecioEntity>,
        imagenes: UploadedFileMetadata[],
    ): Promise<InmuebleEntity> {
        return await getManager().transaction('SERIALIZABLE',
            async (entityManager: EntityManager) => {
                // guardar precio
                const precioRepositorio = entityManager.getRepository(PrecioEntity);
                const precioCreado: PrecioEntity = await precioRepositorio.save(precio as DeepPartial<PrecioEntity>);

                // guardar inmueble
                const inmuebleRepositorio = entityManager.getRepository(InmuebleEntity);
                delete inmueble.createdAt;
                delete inmueble.updatedAt;
                inmueble.precio = precioCreado.id;
                inmueble.habilitado = 1;
                const inmuebleCreado: InmuebleEntity = await inmuebleRepositorio.save(inmueble);
                // recuperar precio con tipoMondena
                const precioRecuperado = await precioRepositorio
                    .findOne({where: {id: precioCreado.id}, relations: ['tipoMoneda']});
                console.log(precioRecuperado);
                // guardar imagenes
                const imagenesGuardadas = await this._imagenInmuebleService
                    .guardarImagenesTransaccion(entityManager, imagenes, inmuebleCreado.id);
                const inmuebleCreadoCompleto: InmuebleEntity = {
                    ...inmuebleCreado,
                    precio: {...precioRecuperado},
                    imagenes: {...imagenesGuardadas},
                };
                return inmuebleCreadoCompleto;
            }
        );
    }
}
