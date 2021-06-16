import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from '@nest-excalibur/common-api/lib';
import { Repository } from 'typeorm';

import { PermissionEntity } from './permission.entity';

@Injectable()
export class PermissionService extends AbstractService<PermissionEntity> {

  constructor(
    @InjectRepository(PermissionEntity)
    private readonly permissionRepository: Repository<PermissionEntity>,
  ) {
    super(permissionRepository);
  }
}
