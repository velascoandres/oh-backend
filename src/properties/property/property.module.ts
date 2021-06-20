import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyEntity } from './property.entity';
import { DataBaseModule } from '@nest-excalibur/data-base/lib';
import { AuthModule } from '../../users/auth/auth.module';
import { CategoryEntity } from '../category/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        PropertyEntity,
      ],
      'mongo_conn',
    ),
    DataBaseModule.forBulkData(
      {
        connection: 'mongo_conn',
        entity: PropertyEntity,
        creationOrder: 2,
        pathDev: '/src/properties/property/test-data/development/properties.json',
        refs: {
          category: CategoryEntity,
        },
      },
    ),
    AuthModule,
  ],
  providers: [
    PropertyService,
  ],
  controllers: [PropertyController],
  exports: [
    PropertyService,
  ],
})
export class PropertyModule {
}
