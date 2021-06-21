import { IoAdapter } from '@nestjs/platform-socket.io';
import * as redisIoAdapter from 'socket.io-redis';

import { ConfigService } from '@nestjs/config';
import { INestApplicationContext } from '@nestjs/common';

const redisAdapter: any = redisIoAdapter;


export class RedisIoAdapter extends IoAdapter {

  constructor(
    app: INestApplicationContext,
    private readonly configService: ConfigService,
  ) {
    super(app);
  }

  createIOServer(port: number, options?: any): any {
    const server = super.createIOServer(port, options);
    const host = this.configService.get('REDIS_HOST');
    const redisPort = Number(this.configService.get('REDIS_PORT'));
    const adapter = redisAdapter({ host, port: redisPort });

    server.adapter(adapter);
    return server;
  }
}