import redis = require('redis');
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const client = redis.createClient(30502);

export const DEVELOPMENT_CONFIG = {
  createTestData: true,
  mysql: {
    type: 'mysql',
    host: 'localhost',
    port: 30501,
    username: 'pimba_man',
    password: '12345678',
    database: 'prueba',
    synchronize: true,
    retryDelay: 40000,
    retryAttempts: 3,
    connectTimeout: 40000,
    keepConnectionAlive: false,
    dropSchema: true,
    charset: 'utf8mb4',
    timezone: 'local',
    ssl: false,
  } as TypeOrmModuleOptions,
  redisConnection: {
    client,
    host: 'localhost',
    port: 30502,
  },
  redisStoreOptions: {
    port: 30502,
    host: 'localhost',
  },
  mongodb: {
    type: 'mongodb',
    name: 'mongo_conn',
    database: 'prueba',
    dropSchema: false,
    useUnifiedTopology: true,
    synchronize: true,
    password: '12345678',
    username: 'pimba_man',
    host: 'localhost',
    port: 30503,
    authSource: 'admin',
  } as TypeOrmModuleOptions,
};
