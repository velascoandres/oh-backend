import { Injectable } from '@nestjs/common';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';
import { HistoryEntity } from './history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class HistoryService extends AbstractMongoService<HistoryEntity> {

  constructor(
    @InjectRepository(HistoryEntity, 'mongo_conn')
    private readonly historyRepository: MongoRepository<HistoryEntity>,
  ) {
    super(historyRepository);
  }

}
