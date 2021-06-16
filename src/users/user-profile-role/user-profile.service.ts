import { Injectable } from '@nestjs/common';

import { AbstractService } from '@nest-excalibur/common-api/lib';

import { UserProfileRoleEntity } from './user-profile-role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserProfileRoleService extends AbstractService<UserProfileRoleEntity> {
    constructor(
        @InjectRepository(UserProfileRoleEntity) userProfileRoleRepository: Repository<UserProfileRoleEntity>,
    ){
        super(userProfileRoleRepository);
    }
}
