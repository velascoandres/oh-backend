import { PartialType } from '@nestjs/mapped-types';
import { HistoryCreateDto } from './history-create.dto';

export class HistoryUpdateDto extends PartialType(HistoryCreateDto) {

}
