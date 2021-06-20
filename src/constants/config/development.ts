import redis = require('redis');
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const client = redis.createClient({host: 'redis_db', port: '6379'});

export const DEVELOPMENT_CONFIG = {
  createTestData: true,
  mysql: {
    type: 'mysql',
    host: 'mysql_db',
    port: 3306,
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
    host: 'redis_db',
    port: 6379,
  },
  redisStoreOptions: {
    port: 6379,
    host: 'redis_db',
  },
  mongodb: {
    type: 'mongodb',
    name: 'mongo_conn',
    database: 'prueba',
    dropSchema: true,
    useUnifiedTopology: true,
    synchronize: true,
    password: '12345678',
    username: 'pimba_man',
    host: 'mongo_db',
    port: 27017,
    authSource: 'admin',
  } as TypeOrmModuleOptions,
};
