import { Module } from '@nestjs/common';
import { FavoritePropertyService } from './favorite-property.service';
import { FavoritePropertyController } from './favorite-property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritePropertyEntity } from './favorite-property.entity';
import {FavoritePublicationCreateDto} from './dtos/favorite-property-create.dto';
import { DataBaseModule } from '@nest-excalibur/data-base/lib';
import { PropertyEntity } from '../property/property.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        FavoritePropertyEntity,
      ],
      'mongo_conn',
    ),
    DataBaseModule.forBulkData(
        {
          entity: FavoritePropertyEntity,
          dtoClassValidation: FavoritePublicationCreateDto,
          creationOrder: 3,
          pathDev: '/src/properties/favorite-property/test-data/development/favorite-property.json',
          connection: 'mongo_conn',
          refs: {
            property: PropertyEntity,
          },
        },
    )
  ],
  providers: [
    FavoritePropertyService,
  ],
  controllers: [
    FavoritePropertyController,
  ],
  exports: [
    FavoritePropertyService,
  ]
})
export class FavoritePropertyModule { }
