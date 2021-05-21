import { Injectable } from '@nestjs/common';
import { AbstractService } from '@pimba/excalibur/lib';
import { UserProfileEntity } from './user-profile.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserProfileService
    extends AbstractService<UserProfileEntity>{

    constructor(
        @InjectRepository(UserProfileEntity)
        private readonly userProfileEntityRepository: Repository<UserProfileEntity>,
    ) {
        super(
          userProfileEntityRepository,
        );
    }
}
