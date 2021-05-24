import { Injectable } from '@nestjs/common';
import { PublicationEntity } from './publication.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectLiteral } from 'typeorm';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';
import { PublicationSearchDto } from './dtos/publication-search.dto';
import { buildRangeCondition, buildSimpleCondition } from '../../helpers/filters';

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
    params: PublicationSearchDto,
    enable = 1,
  ) {
    const {
      skip,
      take,
      distance,
      lat,
      lng,
      maxArea,
      minArea,
      bathrooms,
      bedrooms,
      description,
      floors,
      name,
      parks,
    } = params;
    const location = [lng, lat];
    const areaConditions = buildRangeCondition('area', minArea, maxArea);
    const bathroomsConditions = bathrooms ? [buildSimpleCondition('bathrooms', bathrooms)] : [];
    const bedroomsConditions = bedrooms ? [buildSimpleCondition('bedrooms', bedrooms)]  : [];
    const floorsConditions = floors ? [buildSimpleCondition('floors', floors)]  : [];
    const nameConditions = name ? [buildSimpleCondition('name', name)]  : [];
    const descriptionConditions = description ? [buildSimpleCondition('description', description)] : [];
    const parksConditions = parks ? [buildSimpleCondition('parks', parks)]  : [];
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
            $and: [
              { enable },
              ...areaConditions,
              ...floorsConditions,
              ...bathroomsConditions,
              ...bedroomsConditions,
              ...nameConditions,
              ...descriptionConditions,
              ...parksConditions,
            ],
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
