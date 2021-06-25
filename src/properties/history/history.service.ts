import { Injectable } from '@nestjs/common';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';
import { HistoryEntity } from './history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { setupResponseWithPagination } from '../../helpers';

@Injectable()
export class HistoryService extends AbstractMongoService<HistoryEntity> {

  constructor(
    @InjectRepository(HistoryEntity, 'mongo_conn')
    private readonly historyRepository: MongoRepository<HistoryEntity>,
  ) {
    super(historyRepository);
  }


  getLatestHistoryByUser(user: number, skip = 0, take = 10) {
    const cursor = this.historyRepository
      .aggregate(
        [
          {
            $match: {
              $and: [
                {
                  userProfile: Number(user),
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
          { $sort: { count: -1 } },
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
