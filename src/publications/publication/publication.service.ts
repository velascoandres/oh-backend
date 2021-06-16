import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeepPartial, MongoRepository } from 'typeorm';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';

import { PublicationEntity } from './publication.entity';
import { PublicationSearchDto } from './dtos/publication-search.dto';
import {
  buildLikeCondition,
  buildRangeCondition,
  buildSimpleCondition,
  buildSimpleStatusCondition,
  setupGeoNearPoint,
  setupLookup,
  setupResponseWithPagination,
} from '../../helpers';
import { UserProfileService } from '../../users/user-profile/user-profile.service';
import { PropertyService } from '../property/property.service';

@Injectable()
export class PublicationService extends AbstractMongoService<PublicationEntity> {

  constructor(
    @InjectRepository(PublicationEntity, 'mongo_conn')
    private readonly publicationRepository: MongoRepository<PublicationEntity>,
    private readonly userProfileService: UserProfileService,
    private readonly propertyService: PropertyService,
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
  ) {
    const {
      skip, take, distance, lat, lng, maxArea, minArea, bathrooms, bedrooms,
      description, floors, name, parks, enable, minPrice, maxPrice,
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
        setupLookup('property_picture', 'publicationId', 'pictures'),
        setupResponseWithPagination(skip, take),
      ],
    );
    return cursor
      .toArray()
      .then(arr => arr[0]);
  }

  async createOne(publication: DeepPartial<PublicationEntity>) {
    // search owner
    const userProfile = await this.userProfileService.findOneById(publication.ownerId);
    // register property
    const property = await this.propertyService.createOne(
      {
        enable: 1,
        name: publication.name,
        parks: publication.parks,
        floors: publication.floors,
        bathrooms: publication.bathrooms,
        bedrooms: publication.bedrooms,
        description: publication.description,
        area: publication.area,
        category: +publication.categoryId,
        address: publication.address,
        price: publication.price,
        estateId: publication.estateId,
        isForRent: publication.isForRent,
        owner: userProfile.id,
      },
    );
    // create publication
    return await this.publicationRepository.save(
      {
        ...publication,
        ownerId: userProfile.id.toString(),
        propertyId: property.id,
      },
    );
  }
}
