import { Controller, Get, Query } from '@nestjs/common';

import { CrudController, CrudGuards, CrudMetadata, CrudOptions } from '@nest-excalibur/common-api/lib';
import { AuthGuard } from '@nestjs/passport';

import { PropertyEntity } from './property.entity';
import { PropertyService } from './property.service';
import { PublicationCreateDto } from './dtos/publication-create.dto';
import { PublicationUpdateDto } from './dtos/publication-update.dto';
import { PublicationSearchDto } from './dtos/publication-search.dto';
import { ValidateQueryParamsPipe } from './pipes/validate-query-params.pipe';
import { RoleGuardFactory } from '../../users/auth/guards/roles.factory.guard';
import { UpdatePublicationGuard } from './guards/update-publication.guard';
import { PermissionGuard } from '../../users/auth/guards/permissions.guard';
import { PermissionsEnum } from '../../users/auth/enums/permisions.enum';
import { RoleEnum } from '../../users/auth/enums/role.enum';


const options: CrudOptions = {
  dtoConfig: {
    createDtoType: PublicationCreateDto,
    updateDtoType: PublicationUpdateDto,
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
      RoleGuardFactory([RoleEnum.Admin, RoleEnum.Agent]),
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
    @Query(new ValidateQueryParamsPipe()) searchCriteria: PublicationSearchDto,
  ): Promise<any> {
    return this.publicationService
      .filterByLocation(
        searchCriteria,
      );
  }

}
