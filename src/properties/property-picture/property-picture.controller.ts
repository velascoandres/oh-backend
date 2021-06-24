import { Controller, Param, Post, UploadedFiles, UseFilters, UseInterceptors } from '@nestjs/common';
import { PropertyPictureEntity } from './property-picture.entity';
import { PropertyPictureService } from './property-picture.service';
import { PropertyPictureCreateDto } from './dtos/property-picture-create.dto';
import { PropertyPictureUpdateDto } from './dtos/property-picture-update.dto';
import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadedFileMetadata } from '@nest-excalibur/google-cloud-storage';
import { filterByMimetype } from './multer/filter-by-mimetype';
import { UploadPicturesExceptionsFilters } from './exceptions/upload-pictures-exceptions.filters';


const options: CrudOptions = {
  dtoConfig: {
    createDtoType: PropertyPictureCreateDto,
    updateDtoType: PropertyPictureUpdateDto,
  },
  useMongo: true,
  enableErrorMessages: true,
};


@Controller('properties-picture')
export class PropertyPictureController extends CrudController<PropertyPictureEntity>(options) {

  constructor(
    private readonly propertyPictureService: PropertyPictureService,
  ) {
    super(
      propertyPictureService,
    );
  }


  @Post('upload/:publicationId')
  @UseFilters(new UploadPicturesExceptionsFilters())
  @UseInterceptors(
    FilesInterceptor(
      'pictures',
      10,
      {
        fileFilter: filterByMimetype('image'),
      },
    ),
  )
  uploadPictures(
    @Param('publicationId') publicationId: string,
    @UploadedFiles() pictures: UploadedFileMetadata[],
  ) {
    return this.propertyPictureService.uploadPicture(publicationId, pictures);
  }
}
