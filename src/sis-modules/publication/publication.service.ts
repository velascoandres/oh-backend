import { Injectable } from '@nestjs/common';
import { PublicationEntity } from './publication.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectLiteral } from 'typeorm';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';

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

  async filterByLocation(
    params: {where: ObjectLiteral, skip: number, take: number},
    location: [number, number],
    distance = 1000,
    enable = 1,
  ) {
    const { skip, take } = params ?? { skip: 0, take: 10 };
    console.log(location);
    const cursor = this.publicationRepository.aggregate(
      [
        {
          $geoNear: {
            near: { type: 'Point', coordinates: location },
            maxDistance: distance,
            spherical: false,
            distanceField: 'location.distance',
          },
        },
        {
          $match: {
            // Params
            enable,
            ...params?.where ?? {},
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
      .toArray()
      .then(arr => arr[0]);
  }
}
