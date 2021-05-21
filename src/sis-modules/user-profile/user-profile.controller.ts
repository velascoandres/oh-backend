import { Controller } from '@nestjs/common';
import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { UserProfileEntity } from './user-profile.entity';
import { UserProfileService } from './user-profile.service';
import { UserProfileCreateDto } from './dtos/user-profile-create.dto';
import { UserProfileUpdateDto } from './dtos/user-profile-update.dto';


const options: CrudOptions = {
    dtoConfig: {
        createDtoType: UserProfileCreateDto,
        updateDtoType: UserProfileUpdateDto,
    },
    enableErrorMessages: true,
};


@Controller('user-profile')
export class UserProfileController extends CrudController<UserProfileEntity>(options){
    constructor(
        private readonly userProfileService: UserProfileService,
    ){
        super(
          userProfileService,
        );
    }
}
