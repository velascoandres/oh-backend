import { Injectable } from '@nestjs/common';
import { PublicationEntity } from './publication.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';
import { query } from 'express';

@Injectable()
export class PublicationService
  extends AbstractMongoService<PublicationEntity> {

  constructor(
    @InjectRepository(PublicationEntity, 'mongo_conn')
    private readonly publicationRepository: MongoRepository<PublicationEntity>,
  ) {
    super(
      publicationRepository,
      {
        fieldOrSpec: { location: '2dsphere' },
        options: {
          min: -180,
          max: 180,
        },
      },
    );
  }

  async filterByLocation(params: Record<string, any>, location?: [number, number], enable = 1) {
    const { skip, take } = JSON.parse(params?.query) ?? {skip: 0, take: 10};
    const cursor = this.publicationRepository.aggregate(
      [
        {
          $match: {
            // Params
            enable,
            ...JSON.parse(params?.query)?.where ?? {},
          },
        },
        {
          // Joins
          $lookup: {
            from: 'property_picture',
            localField: '_id',
            foreignField: 'publicationId',
            as: 'pictures',
          },
        },
        {
          $facet: {
            data: [
              { $skip: skip },
              { $limit: take },
            ],
            pageInfo: [
              { $group: { _id: null, count: { $sum: 1 } } },
            ],
          },
        },
      ],
    );
    return cursor
      .skip(skip ?? 0)
      .limit(take ?? 10)
      .toArray();
  }
}
