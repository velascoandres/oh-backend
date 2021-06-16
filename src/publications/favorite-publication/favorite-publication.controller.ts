import { Controller } from '@nestjs/common';

import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';

import { FavoritePublicationService } from './favorite-publication.service';
import { FavoritePublicationCreateDto } from './dtos/favorite-publication-create.dto';
import { FavoritePublicationUpdateDto } from './dtos/favorite-publication-update.dto';
import { FavoritePublicationEntity } from './favorite-publication.entity';


const options: CrudOptions = {
    dtoConfig: {
        createDtoType: FavoritePublicationCreateDto,
        updateDtoType: FavoritePublicationUpdateDto,
    },
    useMongo: true,
    enableErrorMessages: true,
};



@Controller('favorite-publication')
export class FavoritePublicationController extends CrudController<FavoritePublicationEntity>(options){
    constructor(
        private readonly favoritePublicationService: FavoritePublicationService,
    ) {
        super(
          favoritePublicationService,
            {
                createDtoType: FavoritePublicationCreateDto,
                updateDtoType: FavoritePublicationUpdateDto,
            },
        );
    }
}
