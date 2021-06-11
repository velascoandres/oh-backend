import { CanActivate, ExecutionContext, Injectable, mixin, Type } from '@nestjs/common';
import { Observable } from 'rxjs';


export const PermissionGuard = (
  routePermissions: string[],
): Type<CanActivate> => {

  @Injectable()
  class PermissionsGuardInternal implements CanActivate {
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

      const userPermissions = context.getArgs()[0].user.permissions;

      if (!routePermissions) {
        return true;
      }

      const hasPermission = () =>
        routePermissions.every(routePermission =>
          userPermissions.includes(routePermission),
        );

      return hasPermission();
    }
  }

  return mixin(PermissionsGuardInternal);
};
