import { Controller } from '@nestjs/common';
import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { HistoryCreateDto } from './dtos/history-create.dto';
import { HistoryUpdateDto } from './dtos/history-update.dto';
import { HistoryEntity } from './history.entity';
import { HistoryService } from './history.service';

const options: CrudOptions = {
  dtoConfig: {
    createDtoType: HistoryCreateDto,
    updateDtoType: HistoryUpdateDto,
  },
  useMongo: true,
};

@Controller('history')
export class HistoryController extends CrudController<HistoryEntity>(options) {

  constructor(private readonly historyService: HistoryService) {
    super(historyService);
  }
}
