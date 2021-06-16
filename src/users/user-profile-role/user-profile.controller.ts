import { UserProfileRoleService } from './user-profile.service';
import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { Controller } from '@nestjs/common';

import { UserProfileUpdateDTO } from '../user-profile/dtos/user-profile-update.dto';
import { UserProfileCreateDTO } from './dto/user-profile-rol-create.dto';
import { UserProfileRoleEntity } from './user-profile-role.entity';

const options: CrudOptions = {
    dtoConfig: {
        createDtoType: UserProfileCreateDTO,
        updateDtoType: UserProfileUpdateDTO,
    }
};


@Controller('user-profile-role')
export class UserProfileRoleController extends CrudController<UserProfileRoleEntity>(options) {

    constructor(
        private readonly userProfileRoleService: UserProfileRoleService,
    ){
        super(userProfileRoleService);
    }
}
