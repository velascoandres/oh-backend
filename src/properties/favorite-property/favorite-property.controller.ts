import { Controller } from '@nestjs/common';

import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';

import { FavoritePropertyService } from './favorite-property.service';
import { FavoritePublicationCreateDto } from './dtos/favorite-property-create.dto';
import { FavoritePropertyUpdateDto } from './dtos/favorite-property-update.dto';
import { FavoritePropertyEntity } from './favorite-property.entity';


const options: CrudOptions = {
    dtoConfig: {
        createDtoType: FavoritePublicationCreateDto,
        updateDtoType: FavoritePropertyUpdateDto,
    },
    useMongo: true,
    enableErrorMessages: true,
};



@Controller('favorite-publication')
export class FavoritePropertyController extends CrudController<FavoritePropertyEntity>(options){
    constructor(
        private readonly favoritePublicationService: FavoritePropertyService,
    ) {
        super(
          favoritePublicationService,
            {
                createDtoType: FavoritePublicationCreateDto,
                updateDtoType: FavoritePropertyUpdateDto,
            },
        );
    }
}
