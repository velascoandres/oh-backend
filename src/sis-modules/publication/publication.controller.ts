import { Controller, Get, Query } from '@nestjs/common';

import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';

import { PublicationEntity } from './publication.entity';
import { PublicationService } from './publication.service';
import { PublicationCreateDto } from './dtos/publication-create.dto';
import { PublicationUpdateDto } from './dtos/publication-update.dto';
import { ObjectLiteral } from 'typeorm';


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
    @Query() searchCriteria: ObjectLiteral = {}): any {
    return this.publicationService.filterByLocation(searchCriteria);
  }

}
