import { CanActivate, ExecutionContext, Injectable, mixin, Type } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserProfileEntity } from '../../user-profile/user-profile.entity';
import { RoleEntity } from '../../role/role.entity';
import { PermissionEntity } from '../../permission/permission.entity';


export const getPermissions = <T extends string>(userProfile: UserProfileEntity): T[] => {
  const roles = userProfile.userProfileRoles
    .map(
      userProfileRol => userProfileRol.role,
    );
  if (!roles) {
    return [];
  }
  return (roles as RoleEntity[]).reduce(
    (acc: T[], rol: RoleEntity) => {
      const permissions = rol.rolePermissions
        .map(
          rolePermission => (rolePermission.permission as PermissionEntity).name as T,
        );
      acc.push(
        ...permissions,
      );
      return acc;
    },
    [],
  );

};

export const PermissionGuard = <T extends string>(
  routePermissions: T[],
): Type<CanActivate> => {

  @Injectable()
  class PermissionsGuardInternal implements CanActivate {
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

      if (!routePermissions) {
        return true;
      }
      const { user } = context.switchToHttp().getRequest();
      if (!user) {
        return false;
      }
      const userPermissions = getPermissions(user.userProfile as UserProfileEntity);
      const hasPermission = () =>
        routePermissions.every(routePermission =>
          userPermissions.includes(routePermission),
        );

      return hasPermission();
    }
  }

  return mixin(PermissionsGuardInternal);
};


