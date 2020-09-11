import {Injectable} from '@nestjs/common';
import {AbstractService} from '@pimba/excalibur/lib';
import {InmuebleEntity} from './inmueble.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {DeepPartial, EntityManager, getManager, Repository} from 'typeorm';
import {PrecioCreateDto, PrecioCreateMovilDto} from '../precio/dtos/precio-create.dto';
import {PrecioEntity} from '../precio/precio.entity';
import {ImagenInmuebleService} from '../imagen-inmueble/imagen-inmueble.service';
import {UploadedFileMetadata} from '@pimba/excalibur/lib/modules/libs/google-cloud-storage/src/interfaces';
import {InmuebleUpdateMovilDto} from './dtos/inmueble-update-movil.dto';
import {CategoriaEntity} from '../categoria/categoria.entity';
import {ImagenInmuebleEntity} from '../imagen-inmueble/imagen-inmueble.entity';

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
                // guardar imagenes
                const imagenesGuardadas = await this._imagenInmuebleService
                    .guardarImagenesTransaccion(entityManager, imagenes, inmuebleCreado.id);
                // Recuperamos la categoria
                const categoriaRepositorio = entityManager.getRepository(CategoriaEntity);
                const categoriaRecuperada = await categoriaRepositorio.findOne(inmuebleCreado.categoria as number);
                // Retornamos el inmueble completo
                const inmuebleCreadoCompleto: InmuebleEntity = {
                    ...inmuebleCreado,
                    precio: {...precioRecuperado},
                    imagenes: [...imagenesGuardadas],
                    categoria: categoriaRecuperada,
                };
                return inmuebleCreadoCompleto;
            }
        );
    }

    async actualizarInmueblePrecio(
        idInmueble: number,
        inmueble: DeepPartial<InmuebleEntity> & InmuebleUpdateMovilDto,
        precio: PrecioCreateDto | PrecioCreateMovilDto | DeepPartial<PrecioEntity>,
        imagenes: UploadedFileMetadata[],
    ): Promise<InmuebleEntity> {
        return await getManager().transaction('SERIALIZABLE',
            async (entityManager: EntityManager) => {
                // guardar inmueble
                const inmuebleRepositorio = entityManager.getRepository(InmuebleEntity);
                delete inmueble.createdAt;
                delete inmueble.updatedAt;
                const imagenesEliminar = [...inmueble.imagenesEliminar];
                delete inmueble.imagenesEliminar;
                await inmuebleRepositorio.update(idInmueble, inmueble);
                const inmuebleEditado = await this._inmuebleRepository.findOne(idInmueble, {
                        relations: ['categoria', 'imagenes', 'precio', 'perfilUsuario']
                    }
                );
                // guardar precio
                const precioRepositorio = entityManager.getRepository(PrecioEntity);
                const precioRecuperado = await precioRepositorio.findOne({
                    where: {id: (inmuebleEditado.precio as PrecioEntity).id},
                });
                await precioRepositorio.update(precioRecuperado.id, precio as DeepPartial<PrecioEntity>);
                const precioRecuperadoActualizado = await precioRepositorio.findOne({
                    where: {id: precioRecuperado.id},
                    relations: ['tipoMoneda']
                });
                // guardar imagenes nuevas
                console.log('imagenes', imagenes);
                const tieneNuevasImagenes = imagenes && imagenes.length > 0;
                if (tieneNuevasImagenes) {
                    await this._imagenInmuebleService
                        .guardarImagenesTransaccion(entityManager, imagenes, idInmueble);
                }
                // eliminamos imagenes seleccionadas para eliminar
                await this._imagenInmuebleService
                    .eliminarImagenesTransaccion(entityManager, idInmueble, imagenesEliminar as number[]);
                // recuperamos todas las imagenes del inmueble
                const imagenRepositorio = entityManager.getRepository(ImagenInmuebleEntity);
                const imagenesGuardadas = await imagenRepositorio.find({where: {inmueble: idInmueble}});
                // Retornamos el inmueble completo
                const inmuebleCreadoCompleto: InmuebleEntity = {
                    ...inmuebleEditado,
                    precio: {...precioRecuperadoActualizado},
                    imagenes: [...imagenesGuardadas],
                };
                return inmuebleCreadoCompleto;
            }
        );
    }
}
