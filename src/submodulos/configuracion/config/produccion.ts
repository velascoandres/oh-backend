import redis = require('redis');
import {TypeOrmModuleOptions} from '@nestjs/typeorm';
const client = redis.createClient(30502);

export const CONFIGURATION_PRODUCCION = {
  crearDatosPrueba: false,
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
    keepConnectionAlive: true,
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
    name: 'conexion_mongo',
    useNewUrlParser: true,
    dropSchema: true,
    useUnifiedTopology: true,
    url: `mongodb://pimba_man:12345678@localhost:30503/test?authSource=admin`,
  } as TypeOrmModuleOptions,
};
