import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserProfileEntity } from '../../user-profile/user-profile.entity';
import { getPermissions } from '../../auth/guards/permissions.guard';
import { Reflector } from '@nestjs/core';
import { PublicationService } from '../publication.service';
import { PermissionsEnum } from '../../auth/enums/permisions.enum';


@Injectable()
export class UpdatePublicationGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector,
    private readonly publicationService: PublicationService,
  ) {
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    /*const routePermissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );
*/
    const routePermissions = [PermissionsEnum.UPDATE];
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
      return publication.publisher.id === user.userProfile.id;
    }
  }
}
