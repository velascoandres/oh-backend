import {IsNotEmpty} from 'class-validator';

export class LocationCreateDto {
    @IsNotEmpty()
    type: 'Point' |
        'LineString' |
        'Polygon' |
        'MultiPoint' |
        'MultiLineString' |
        'GeometryCollection' = 'Point';

    @IsNotEmpty()
    coordinates: number[];
}
