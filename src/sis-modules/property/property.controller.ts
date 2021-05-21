import { Controller } from '@nestjs/common';
import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { PropertyService } from './property.service';
import { PropertyCreateDto } from './dtos/property-create.dto';
import { PropertyUpdateDto } from './dtos/property-update.dto';


const options: CrudOptions = {
  dtoConfig: {
    createDtoType: PropertyCreateDto,
    updateDtoType: PropertyUpdateDto,
  },
  enableErrorMessages: true,
};


@Controller('property')
export class PropertyController extends CrudController(options) {
  constructor(
    private readonly propertyService: PropertyService,
  ) {
    super(
      propertyService,
    );
  }
}
