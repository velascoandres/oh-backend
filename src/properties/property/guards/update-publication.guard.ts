import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserProfileEntity } from '../../../users/user-profile/user-profile.entity';
import { getPermissions } from '../../../users/auth/guards/permissions.guard';
import { Reflector } from '@nestjs/core';
import { PropertyService } from '../property.service';


@Injectable()
export class UpdatePublicationGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector,
    private readonly publicationService: PropertyService,
  ) {
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    try {
      const routePermissions = this.reflector.get<string[]>(
        'permissions',
        context.getHandler(),
      );
      if (!routePermissions) {
        return true;
      }
      const { request } = context.switchToHttp().getRequest();
      const { user } = request;
      const params = request.params;
      const publicationId = params.id;

      const userPermissions = getPermissions(user.userProfile as UserProfileEntity);
      const hasPermission = () =>
        routePermissions.every(routePermission =>
          userPermissions.includes(routePermission),
        );
      if (hasPermission()) {
        return true;
      } else {
        const publication = await this.publicationService.findOneById(publicationId);
        return publication.userProfile === user.userProfile.id;
      }
    } catch (error) {
      return false;
    }
  }
}
