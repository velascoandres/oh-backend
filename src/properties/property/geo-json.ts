import {Column} from 'typeorm';

export class GeoJSON {
    @Column()
    type: 'Point' |
        'LineString' |
        'Polygon' |
        'MultiPoint' |
        'MultiLineString' |
        'GeometryCollection' = 'Point';

    @Column()
    coordinates: number[] | [[number, number]] | [[[number, number]]];
}
