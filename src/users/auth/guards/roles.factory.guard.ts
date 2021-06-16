import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  mixin,
  Type,
} from '@nestjs/common';
import { RoleEnum } from '../enums/role.enum';
import { UserProfileEntity } from '../../user-profile/user-profile.entity';
import { RoleEntity } from '../../role/role.entity';


export const RoleGuardFactory = (requiredRoles: RoleEnum[]): Type<CanActivate> => {

  @Injectable()
  class RolesGuardInternal implements CanActivate {

    canActivate(context: ExecutionContext): boolean {
      const { user } = context.switchToHttp().getRequest();
      if (!user) {
        throw new UnauthorizedException('Not Authorized');
      }
      const { userProfile } = user;

      if (!userProfile) {
        throw new UnauthorizedException('Not Authorized');
      }
      const userProfileRoles = (userProfile as UserProfileEntity).userProfileRoles;

      const roles = userProfileRoles.map(userRol => (userRol.role as RoleEntity).name);

      return requiredRoles.some((role: RoleEnum) => roles?.includes(role));
    }
  }

  return mixin(RolesGuardInternal);
};