import { Controller, Get, Query } from '@nestjs/common';

import { CrudController, CrudGuards, CrudMetadata, CrudOptions } from '@nest-excalibur/common-api/lib';
import { AuthGuard } from '@nestjs/passport';

import { PublicationEntity } from './publication.entity';
import { PublicationService } from './publication.service';
import { PublicationCreateDto } from './dtos/publication-create.dto';
import { PublicationUpdateDto } from './dtos/publication-update.dto';
import { PublicationSearchDto } from './dtos/publication-search.dto';
import { ValidateQueryParamsPipe } from './pipes/validate-query-params.pipe';
import { RoleGuardFactory } from '../auth/guards/roles.factory.guard';
import { UpdatePublicationGuard } from './guards/update-publication.guard';
import { PermissionGuard } from '../auth/guards/permissions.guard';
import { PermissionsEnum } from '../auth/enums/permisions.enum';
import { RoleEnum } from '../auth/enums/role.enum';


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
export class PublicationController
  extends CrudController<PublicationEntity>(options) {
  constructor(
    private readonly publicationService: PublicationService,
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
