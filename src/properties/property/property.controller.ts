import { Controller, Get, Query } from '@nestjs/common';

import { CrudController, CrudGuards, CrudMetadata, CrudOptions } from '@nest-excalibur/common-api/lib';
import { AuthGuard } from '@nestjs/passport';

import { PropertyEntity } from './property.entity';
import { PropertyService } from './property.service';
import { PropertyCreateDto } from './dtos/property-create.dto';
import { PropertyUpdateDto } from './dtos/property-update.dto';
import { PropertySearchDto } from './dtos/property-search.dto';
import { ValidateQueryParamsPipe } from './pipes/validate-query-params.pipe';
import { UpdatePublicationGuard } from './guards/update-publication.guard';
import { PermissionGuard } from '../../users/auth/guards/permissions.guard';
import { PermissionsEnum } from '../../users/auth/enums/permisions.enum';


const options: CrudOptions = {
  dtoConfig: {
    createDtoType: PropertyCreateDto,
    updateDtoType: PropertyUpdateDto,
  },
  useMongo: true,
  enableErrorMessages: true,
};

@CrudMetadata(
  {
    updateOne: [
      {
        key: 'permissions',
        data: [PermissionsEnum.UPDATE],
      }
    ],
  }
)
@CrudGuards(
  {
    findAll: [
      AuthGuard('firebase-auth'),
    ],
    updateOne: [
      AuthGuard('firebase-auth'),
      UpdatePublicationGuard,
    ],
    deleteOne: [
      AuthGuard('firebase-auth'),
      PermissionGuard<PermissionsEnum>([PermissionsEnum.DELETE]),
    ],
    createOne: [
      AuthGuard('firebase-auth'),
    ],
  },
)
@Controller('publication')
export class PropertyController
  extends CrudController<PropertyEntity>(options) {
  constructor(
    private readonly publicationService: PropertyService,
  ) {
    super(
      publicationService,
    );
  }

  @Get()
  findAll(
    @Query(new ValidateQueryParamsPipe()) searchCriteria: PropertySearchDto,
  ): Promise<any> {
    return this.publicationService
      .filterByLocation(
        searchCriteria,
      );
  }

}
