import { Module } from '@nestjs/common';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionEntity } from './permission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        PermissionEntity,
      ],
      'default'
    )
  ],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {
}
