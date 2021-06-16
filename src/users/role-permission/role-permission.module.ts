import { Module } from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { RolePermissionController } from './role-permission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePermissionEntity } from './role-permission.entity';
import { DataBaseModule } from '@nest-excalibur/data-base';
import { CreateRolePermissionDto } from './dto/create-role-permission.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [RolePermissionEntity],
      'default',
    ),
    DataBaseModule.forBulkData(
      {
        entity: RolePermissionEntity,
        connection: 'default',
        creationOrder: 3,
        pathDev: '/src/sis-modules/role-permission/test-data/role-permission.development.json',
        pathProd: '/src/sis-modules/role-permission/test-data/role-permission.production.json',
        dtoClassValidation: CreateRolePermissionDto,
      }
    ),
  ],
  providers: [RolePermissionService],
  controllers: [RolePermissionController]
})
export class RolePermissionModule {}
