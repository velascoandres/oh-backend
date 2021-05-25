import { Controller, Get, Query } from '@nestjs/common';

import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';

import { PublicationEntity } from './publication.entity';
import { PublicationService } from './publication.service';
import { PublicationCreateDto } from './dtos/publication-create.dto';
import { PublicationUpdateDto } from './dtos/publication-update.dto';
import { PublicationSearchDto } from './dtos/publication-search.dto';
import { ValidateQueryParamsPipe } from './pipes/validate-query-params.pipe';


const options: CrudOptions = {
  dtoConfig: {
    createDtoType: PublicationCreateDto,
    updateDtoType: PublicationUpdateDto,
  },
  useMongo: true,
  enableErrorMessages: true,
};


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
