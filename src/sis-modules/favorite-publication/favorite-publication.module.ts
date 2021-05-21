import { Module } from '@nestjs/common';
import { FavoritePublicationService } from './favorite-publication.service';
import { FavoritePublicationController } from './favorite-publication.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritePublicationEntity } from './favorite-publication.entity';
import {FavoritePublicationCreateDto} from './dtos/favorite-publication-create.dto';
import { DataBaseModule } from '@nest-excalibur/data-base/lib';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        FavoritePublicationEntity,
      ],
      'default',
    ),
    DataBaseModule.forBulkData(
        {
          entity: FavoritePublicationEntity,
          dtoClassValidation: FavoritePublicationCreateDto,
          creationOrder: 2,
          pathDev: '/src/sis-modules/favorite-publication/test-data/development/favorite-publications.json'
        },
    )
  ],
  providers: [
    FavoritePublicationService,
  ],
  controllers: [
    FavoritePublicationController,
  ],
  exports: [
    FavoritePublicationService,
  ]
})
export class FavoritePublicationModule { }
