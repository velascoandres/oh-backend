import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryEntity } from './history.entity';
import { DataBaseModule } from '@nest-excalibur/data-base/lib';
import { PropertyEntity } from '../property/property.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        HistoryEntity,
      ],
      'mongo_conn',
    ),
    DataBaseModule
      .forBulkData(
        {
          connection: 'mongo_conn',
          creationOrder: 4,
          entity: HistoryEntity,
          pathDev: 'src/properties/history/test-data/history.development.json',
          refs: {
            property: PropertyEntity
          }
        },
      ),
  ],
  providers: [
    HistoryService,
  ],
  controllers: [
    HistoryController,
  ],
})
export class HistoryModule {
}
