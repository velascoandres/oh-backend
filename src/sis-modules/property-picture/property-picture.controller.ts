import { Controller } from '@nestjs/common';
import { PropertyPictureEntity } from './property-picture.entity';
import { PropertyPictureService } from './property-picture.service';
import { PropertyPictureCreateDto } from './dtos/property-picture-create.dto';
import { PropertyPictureUpdateDto } from './dtos/property-picture-update.dto';
import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';


const options: CrudOptions = {
    dtoConfig: {
        createDtoType: PropertyPictureCreateDto,
        updateDtoType: PropertyPictureUpdateDto,
    },
    enableErrorMessages: true,
};


@Controller('property-picture')
export class PropertyPictureController extends CrudController<PropertyPictureEntity>(options){

    constructor(
        private readonly propertyPictureService: PropertyPictureService,
    ) {
        super(
            propertyPictureService,
        );
    }
}
