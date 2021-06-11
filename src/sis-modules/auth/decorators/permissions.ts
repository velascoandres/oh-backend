import { SetMetadata } from '@nestjs/common';

export const Permissions = <T extends  string>(...permissions: T[]) =>
  SetMetadata('permissions', permissions);