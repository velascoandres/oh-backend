import { Controller } from '@nestjs/common';

import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';

import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionEntity } from './permission.entity';


const options: CrudOptions = {
  dtoConfig: {
    createDtoType: CreatePermissionDto,
    updateDtoType: UpdatePermissionDto,
  },
};


@Controller('permission')
export class PermissionController extends CrudController<PermissionEntity>(options) {
  constructor(private readonly permissionService: PermissionService) {
    super(permissionService);
  }
}
