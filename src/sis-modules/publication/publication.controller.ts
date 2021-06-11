import { Controller, Get, Query } from '@nestjs/common';

import { CrudController, CrudGuards, CrudOptions } from '@nest-excalibur/common-api/lib';

import { PublicationEntity } from './publication.entity';
import { PublicationService } from './publication.service';
import { PublicationCreateDto } from './dtos/publication-create.dto';
import { PublicationUpdateDto } from './dtos/publication-update.dto';
import { PublicationSearchDto } from './dtos/publication-search.dto';
import { ValidateQueryParamsPipe } from './pipes/validate-query-params.pipe';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuardFactory } from '../auth/guards/roles.factory.guard';
import { RoleEnum } from '../auth/enums/role.enum';


const options: CrudOptions = {
  dtoConfig: {
    createDtoType: PublicationCreateDto,
    updateDtoType: PublicationUpdateDto,
  },
  useMongo: true,
  enableErrorMessages: true,
};

@CrudGuards(
  {
    findAll: [
      AuthGuard('firebase-auth'),
      RoleGuardFactory([RoleEnum.Admin, RoleEnum.Agent]),
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
