import { ObjectLiteral } from 'typeorm';
import { IsNotEmpty, IsNumber, IsObject, IsOptional } from 'class-validator';

export interface IPublicationSearchCriteria {
  query: ObjectLiteral | string;
  lng: number;
  lat: number;
  distance: number;
}


export class PublicationSearchDto implements  IPublicationSearchCriteria{
  @IsOptional()
  @IsObject()
  query: ObjectLiteral;

  @IsNotEmpty()
  @IsNumber()
  lng: number;

  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  distance: number;
}
