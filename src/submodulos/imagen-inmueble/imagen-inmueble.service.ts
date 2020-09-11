import {Injectable} from '@nestjs/common';
import {AbstractService, GoogleCloudStorageService} from '@pimba/excalibur/lib';
import {ImagenInmuebleEntity} from './imagen-inmueble.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {EntityManager, Repository} from 'typeorm';
import {UploadedFileMetadata} from '@pimba/excalibur/lib/modules/libs/google-cloud-storage/src/interfaces';

@Injectable()
export class ImagenInmuebleService
    extends AbstractService<ImagenInmuebleEntity> {

    constructor(
        @InjectRepository(ImagenInmuebleEntity)
        private readonly _imgInmuebleRepository: Repository<ImagenInmuebleEntity>,
        private readonly _googleCloudService: GoogleCloudStorageService,
    ) {
        super(
            _imgInmuebleRepository,
        );
    }

    // transaccion para guardar
    async guardarImagenesTransaccion(
        entityManager: EntityManager,
        imagenes: UploadedFileMetadata[], idInmueble: number,
    ): Promise<ImagenInmuebleEntity[]> {
        const imagenesGuardadas: ImagenInmuebleEntity[] = [];
        const imagenInmuebleRepositorio = entityManager.getRepository(ImagenInmuebleEntity);
            for (const archivoImagen of imagenes) {
                const url = await this._googleCloudService.upload(archivoImagen);
                const imagenAGuardar: Partial<ImagenInmuebleEntity> = {
                    url,
                    inmueble: idInmueble,
                };
                const imagenGuardada: ImagenInmuebleEntity = await imagenInmuebleRepositorio.save(imagenAGuardar);
                imagenesGuardadas.push(imagenGuardada);
            }
        return imagenesGuardadas;
    }

    // transaccion para eliminar
    async eliminarImagenesTransaccion(
        entityManager: EntityManager,
        idInmueble: number,
        imagenesEliminar?: number[] | string[],
    ): Promise<void> {
        const imagenInmuebleRepositorio = entityManager.getRepository(ImagenInmuebleEntity);
        if (imagenesEliminar && imagenesEliminar.length > 0) {
            await imagenInmuebleRepositorio.delete(imagenesEliminar);
        }
    }

}
