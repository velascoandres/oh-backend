import { Injectable } from '@nestjs/common';
import { PropertyPictureEntity } from './property-picture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';
import { GoogleCloudStorageService, UploadedFileMetadata } from '@nest-excalibur/google-cloud-storage';
import { PublicationService } from '../publication/publication.service';

@Injectable()
export class PropertyPictureService
  extends AbstractMongoService<PropertyPictureEntity> {

  constructor(
    @InjectRepository(PropertyPictureEntity, 'mongo_conn')
    private readonly propertyPictureRepository: MongoRepository<PropertyPictureEntity>,
    private readonly googleCloudService: GoogleCloudStorageService,
    private readonly publicationService: PublicationService,
  ) {
    super(
      propertyPictureRepository,
    );
  }

  async uploadPicture(
    publicationId: string,
    pictures: UploadedFileMetadata[],
  ): Promise<PropertyPictureEntity[]> {
    // validate property
    const publication = await this.publicationService.findOneById(publicationId);

    // upload to cloud
    const uploadedFiles: PropertyPictureEntity[] = [];
    for (const picture of pictures) {
      const url = await this.googleCloudService.upload(picture, {
        prefix: `properties/${publicationId}/`,
      });
      const propertyPicture = await this.createOne(
        {
          publicationId: publication.id,
          url,
        },
      );
      uploadedFiles.push(propertyPicture);
    }
    return uploadedFiles;
  }

}
