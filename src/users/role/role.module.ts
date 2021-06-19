import { DataBaseModule } from '@nest-excalibur/data-base/lib';
import { RoleEntity } from './role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleCreateDTO } from './dto/role-create.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [RoleEntity], 'default',
    ),
    DataBaseModule.forBulkData(
      {
        entity: RoleEntity,
        connection: 'default',
        creationOrder: 1,
        pathDev: '/src/users/role/test-data/roles.development.json',
        pathProd: '/src/users/role/test-data/roles.production.json',
        dtoClassValidation: RoleCreateDTO,
      }
    ),
  ],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule { }
