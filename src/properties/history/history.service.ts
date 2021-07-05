import { Injectable } from '@nestjs/common';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';
import { HistoryEntity } from './history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, MongoRepository } from 'typeorm';
import { setupResponseWithPagination } from '../../helpers';
import { HistoryCreateDto } from './dtos/history-create.dto';
import { ObjectID } from 'mongodb';
import { CreateOneException } from '@nest-excalibur/common-api/lib/';

@Injectable()
export class HistoryService extends AbstractMongoService<HistoryEntity> {

  constructor(
    @InjectRepository(HistoryEntity, 'mongo_conn')
    private readonly historyRepository: MongoRepository<HistoryEntity>,
  ) {
    super(historyRepository);
  }

  async createOne(document: HistoryCreateDto | DeepPartial<HistoryEntity>): Promise<HistoryEntity> {
    try {
      return this.historyRepository.save({
        ...document,
        property: new ObjectID(document.property as string),
      } as DeepPartial<HistoryEntity>);
    } catch (error) {
      throw new CreateOneException(
        {
          data: document,
          error,
          message: 'Error on create history document'
        }
      );
    }
  }

  getLatestHistoryByUser(user: string, skip = 0, take = 10) {
    const cursor = this.historyRepository
      .aggregate(
        [
          {
            $match: {
              $and: [
                {
                  userProfile: user,
                },
              ],
            },
          },
          {
            $lookup: {
              from: 'property',
              localField: 'property',
              foreignField: '_id',
              as: 'property',
            },
          },
          {
            $unwind: {
              path: '$property',
              preserveNullAndEmptyArrays: false,
            },
          },
          {
            $lookup: {
              from: 'property_picture',
              localField: 'property._id',
              foreignField: 'property',
              as: 'property.pictures',
            },
          },
          {
            $lookup: {
              from: 'prop_category',
              localField: 'property.category',
              foreignField: '_id',
              as: 'property.category',
            },
          },
          {
            $unwind: {
              path: '$property.category',
              preserveNullAndEmptyArrays: false,
            },
          },
          { $match: { ['property.pictures.0']: { $exists: true } } },
          {
            $match: {
              'property.enable': 1,
            },
          },
          {
            $group: {
              _id: { property: '$property' },
              count: { $sum: 1 },
            },
          },
          { $sort: { _id: -1 } },
          setupResponseWithPagination(skip, take),
        ],
      );
    return cursor
      .toArray()
      .then(arr => {
          return arr[0];
        },
      );
  }
}
