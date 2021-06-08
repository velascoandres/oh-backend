import { AbstractService } from '@nest-excalibur/common-api/lib';
import { RoleEntity } from './role.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService extends AbstractService<RoleEntity>{
    constructor(
        @InjectRepository(RoleEntity) roleRepository: Repository<RoleEntity>,
    ) {
        super(roleRepository);
    }
}
