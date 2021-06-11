import { Module } from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { RolePermissionController } from './role-permission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePermissionEntity } from './role-permission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [RolePermissionEntity],
      'default',
    ),
  ],
  providers: [RolePermissionService],
  controllers: [RolePermissionController]
})
export class RolePermissionModule {}
