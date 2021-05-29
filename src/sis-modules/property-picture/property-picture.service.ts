import { Injectable } from '@nestjs/common';
import { PropertyPictureEntity } from './property-picture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';
import { GoogleCloudStorageService, UploadedFileMetadata } from '@nest-excalibur/google-cloud-storage';
import { PropertyService } from '../property/property.service';
import { PublicationService } from '../publication/publication.service';

@Injectable()
export class PropertyPictureService
  extends AbstractMongoService<PropertyPictureEntity> {

  constructor(
    @InjectRepository(PropertyPictureEntity, 'mongo_conn')
    private readonly propertyPictureRepository: MongoRepository<PropertyPictureEntity>,
    private readonly googleCloudService: GoogleCloudStorageService,
    private readonly propertyService: PropertyService,
    private readonly publicationService: PublicationService,
  ) {
    super(
      propertyPictureRepository,
    );
  }

  async uploadPicture(
    propertyId: number,
    publicationId: string,
    pictures: UploadedFileMetadata[],
  ): Promise<PropertyPictureEntity[]> {
    // validate property
    const property = await this.propertyService.findOneById(propertyId);
    const publication = await this.publicationService.findOneById(publicationId);

    const idsEquals = publication.propertyId === property.id;
    if (!idsEquals) {
      throw new Error('The publication does not part of property');
    }
    // upload to cloud
    const uploadedFiles: PropertyPictureEntity[] = [];
    for (const picture of pictures) {
      const url = await this.googleCloudService.upload(picture, {
        prefix: `properties/${propertyId}/`,
      });
      const propertyPicture = await this.createOne(
        {
          propertyId,
          publicationId: publication.id,
          url,
        },
      );
      uploadedFiles.push(propertyPicture);
    }
    return uploadedFiles;
  }

}
