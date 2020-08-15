import { AbstractMongoEntity } from '@pimba/excalibur/lib';
import { Entity, Column } from 'typeorm';

@Entity('ent_coord')
export class EntidadCoordenadaEntity extends AbstractMongoEntity {

    @Column({
        type: 'varchar',
        name: 'entidad',
    })
    entidad: string;

    @Column({
        type: 'int',
        name: 'entidadId',
    })
    entidadId: number;


    @Column()
    type: 'Point' = 'Point';

    @Column()
    coordinates: [number, number];
}
