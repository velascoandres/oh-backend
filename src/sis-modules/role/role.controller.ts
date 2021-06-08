import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';
import { RoleCreateDTO } from './dto/role-create.dto';
import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { Controller } from '@nestjs/common';
import { RoleUpdateDTO } from './dto/role-update.dto';

const options: CrudOptions = {
    dtoConfig: {
        createDtoType: RoleCreateDTO,
        updateDtoType: RoleUpdateDTO,
    }
};


@Controller('role')
export class RoleController extends CrudController<RoleEntity>(options) {

    constructor(private readonly roleService: RoleService) {
        super(roleService);
    }

}
