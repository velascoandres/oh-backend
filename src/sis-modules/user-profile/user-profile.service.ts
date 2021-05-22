import { Injectable } from '@nestjs/common';
import { UserProfileEntity } from './user-profile.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from '@nest-excalibur/common-api/lib';

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
