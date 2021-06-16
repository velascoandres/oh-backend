import { Module } from '@nestjs/common';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionEntity } from './permission.entity';
import { DataBaseModule } from '@nest-excalibur/data-base';
import { CreatePermissionDto } from './dto/create-permission.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        PermissionEntity,
      ],
      'default'
    ),
    DataBaseModule.forBulkData(
      {
        entity: PermissionEntity,
        connection: 'default',
        creationOrder: 2,
        pathDev: '/src/sis-modules/permission/test-data/permissions.development.json',
        pathProd: '/src/sis-modules/permission/test-data/permissions.production.json',
        dtoClassValidation: CreatePermissionDto,
      }
    ),
  ],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {
}
