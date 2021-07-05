import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { HistoryCreateDto } from './dtos/history-create.dto';
import { HistoryUpdateDto } from './dtos/history-update.dto';
import { HistoryEntity } from './history.entity';
import { HistoryService } from './history.service';
import { AuthGuard } from '@nestjs/passport';

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

  @UseGuards(
    AuthGuard('firebase-auth'),
  )
  @Get('latest-history')
  async getLatestHistory(
    @Req() { user },
    @Query() { skip, take }: { skip: number, take: number },
  ) {
    return this.historyService.getLatestHistoryByUser(user.userProfile.id.toString(), skip, take);
  }

}
