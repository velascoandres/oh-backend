import { RoleCreateDTO } from './role-create.dto';
import { PartialType } from '@nestjs/mapped-types';

export class RoleUpdateDTO extends PartialType(RoleCreateDTO) { }