import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MongoRepository } from 'typeorm';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';

import { PropertyEntity } from './property.entity';
import { PropertySearchDto } from './dtos/property-search.dto';
import {
  buildLikeCondition,
  buildRangeCondition,
  buildSimpleCondition, buildSimpleMatchCondition,
  buildSimpleStatusCondition,
  setupGeoNearPoint,
  setupLookup,
  setupResponseWithPagination,
} from '../../helpers';

@Injectable()
export class PropertyService extends AbstractMongoService<PropertyEntity> {

  constructor(
    @InjectRepository(PropertyEntity, 'mongo_conn')
    private readonly publicationRepository: MongoRepository<PropertyEntity>,
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
    params: PropertySearchDto,
  ) {
    const {
      skip, take, distance, lat, lng, maxArea, minArea, bathrooms, bedrooms,
      description, floors, name, parks, enable, minPrice, maxPrice, category
    } = params;
    const location = [lng, lat];
    const cursor = this.publicationRepository.aggregate(
      [
        setupGeoNearPoint(location, distance, 'location.distance'),
        {
          $match: {
            // Params
            $and: [
              ...buildSimpleStatusCondition('enable', enable),
              ...buildRangeCondition('area', minArea, maxArea),
              ...buildRangeCondition('price', minPrice, maxPrice),
              ...buildSimpleCondition('bathrooms', bathrooms),
              ...buildSimpleCondition('bedrooms', bedrooms),
              ...buildLikeCondition('name', name),
              ...buildLikeCondition('description', description),
              ...buildSimpleCondition('parks', parks),
              ...buildSimpleCondition('floors', floors),
            ],
          },
        },
        setupLookup('property_picture', 'property', 'pictures'),
        setupLookup('prop_category', '_id', 'category', 'category'),
        {
          $unwind: {
            path: '$category',
            preserveNullAndEmptyArrays: false,
          },
        },
        { $match: { ['pictures.0']: { $exists: true } } },
        ...buildSimpleMatchCondition('category.code', category),
        setupResponseWithPagination(skip, take),
      ],
    );
    return cursor
      .toArray()
      .then(arr => arr[0]);
  }
}
