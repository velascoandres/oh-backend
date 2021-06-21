import { NestFactory } from '@nestjs/core';

import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './adapters/redis-io.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.useWebSocketAdapter(new RedisIoAdapter(app, configService));

  app.enableCors();

  await app.listen(8080);
}

bootstrap();
