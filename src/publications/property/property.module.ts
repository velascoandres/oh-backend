import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {DataBaseModule} from '@nest-excalibur/data-base/lib';

import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { PropertyEntity } from './property.entity';
import {PropertyCreateDto} from './dtos/property-create.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        PropertyEntity,
      ],
      'default'
    ),
    DataBaseModule.forBulkData(
        {
          entity: PropertyEntity,
          dtoClassValidation: PropertyCreateDto,
          creationOrder: 4,
          pathDev: '/src/publications/property/test-data/development/properties.json'
        },
    ),
  ],
  controllers: [
    PropertyController,
  ],
  providers: [
    PropertyService
  ],
  exports: [
    PropertyService,
  ]
})
export class PropertyModule {}
