import { AbstractEntity } from '@pimba/excalibur/lib';
import { Entity } from 'typeorm';

@Entity('categoria')
export class CategoriaEntity extends AbstractEntity {}