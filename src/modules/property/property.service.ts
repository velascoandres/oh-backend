import { Injectable } from '@nestjs/common';
import { AbstractService } from '@nest-excalibur/common-api/lib';
import { PropertyEntity } from './property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyService extends AbstractService<PropertyEntity> {
    constructor(
        @InjectRepository(PropertyEntity)
        private readonly propertyRepository: Repository<PropertyEntity>,
    ) {
        super(
            propertyRepository,
        );
    }
}
